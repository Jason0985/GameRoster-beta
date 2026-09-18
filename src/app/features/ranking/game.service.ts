import { Injectable, effect, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../../player.model';
import { supabase } from '../../supabase.client';
import { SessionService } from '../../services/session.service';

export type GamePhase = 'setup' | 'playing' | 'finished';

const STORAGE_KEY = 'boardgame:players';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly session = inject(SessionService);

  private playersSubject = new BehaviorSubject<Player[]>([]);
  players$ = this.playersSubject.asObservable();

  private roundCountSubject = new BehaviorSubject(0);
  roundCount$ = this.roundCountSubject.asObservable();

  private phaseSubject = new BehaviorSubject<GamePhase>('setup');
  phase$ = this.phaseSubject.asObservable();

  // Erst-Ladevorgang, auf den der Guard warten kann
  private readyResolve!: () => void;
  private readyPromise = new Promise<void>((r) => (this.readyResolve = r));

  private saveTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // Auf Login/Logout reagieren: eingeloggt -> DB, sonst -> localStorage
    effect(() => {
      if (!this.session.initialized()) return; // warten auf erste Session-Prüfung

      const user = this.session.user();
      if (user) {
        this.loadFromDb(user.id);
      } else {
        this.loadFromLocal();
      }
    });
  }

  ready(): Promise<void> {
    return this.readyPromise;
  }

  currentPhase(): GamePhase {
    return this.phaseSubject.value;
  }

  private async loadFromDb(userId: string): Promise<void> {
    const { data } = await supabase
      .from('ranking_games')
      .select('players, round_count, phase')
      .eq('user_id', userId)
      .maybeSingle();

    this.playersSubject.next((data?.players as Player[]) ?? []);
    this.roundCountSubject.next(data?.round_count ?? 0);
    this.phaseSubject.next((data?.phase as GamePhase) ?? 'setup');
    this.readyResolve();
  }

  private loadFromLocal(): void {
    let players: Player[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      players = raw ? (JSON.parse(raw) as Player[]) : [];
    } catch {}
    this.playersSubject.next(players);
    this.roundCountSubject.next(0);
    this.phaseSubject.next('setup');
    this.readyResolve();
  }

  // Speichert lokal sofort und (bei Login) verzögert in die DB
  private persist(): void {
    const players = this.playersSubject.value;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
    } catch {}

    const user = this.session.user();
    if (!user) return;

    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      supabase.from('ranking_games').upsert({
        user_id: user.id,
        players,
        round_count: this.roundCountSubject.value,
        phase: this.phaseSubject.value,
        updated_at: new Date().toISOString(),
      });
    }, 400);
  }

  getPlayers(): Player[] {
    return [...this.playersSubject.value];
  }

  addPlayer(name: string): void {
    const trimmed = (name || '').trim();
    if (!trimmed) return;
    this.playersSubject.next([
      ...this.playersSubject.value,
      { id: Date.now().toString(), name: trimmed, score: 0 },
    ]);
    this.persist();
  }

  removePlayer(id: string): void {
    this.playersSubject.next(
      this.playersSubject.value.filter((p) => p.id !== id)
    );
    this.persist();
  }

  startGame(): void {
    this.phaseSubject.next('playing');
    this.persist();
  }

  finishGame(): void {
    this.phaseSubject.next('finished');
    this.persist();
  }

  completeRound(roundScores: Readonly<Record<string, number | null>>): void {
    const players = this.playersSubject.value.map((p) =>
      p.id in roundScores && Number.isFinite(roundScores[p.id])
        ? { ...p, score: p.score + (roundScores[p.id] ?? 0) }
        : p
    );
    this.playersSubject.next(players);
    this.roundCountSubject.next(this.roundCountSubject.value + 1);
    this.persist();
  }

  resetScores(): void {
    this.playersSubject.next(
      this.playersSubject.value.map((p) => ({ ...p, score: 0 }))
    );
    this.roundCountSubject.next(0);
    this.phaseSubject.next('setup');
    this.persist();
  }

  resetGame(): void {
    this.playersSubject.next([]);
    this.roundCountSubject.next(0);
    this.phaseSubject.next('setup');
    this.persist();
  }
}