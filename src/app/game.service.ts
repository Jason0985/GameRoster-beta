import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from './player.model';

const STORAGE_KEY = 'boardgame:players';

@Injectable({ providedIn: 'root' })
export class GameService {
  private playersSubject = new BehaviorSubject<Player[]>(this.load());
  players$ = this.playersSubject.asObservable();

  private load(): Player[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Player[]) : [];
    } catch {
      return [];
    }
  }

  private save(players: Player[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
    } catch {}
  }

  getPlayers(): Player[] {
    return [...this.playersSubject.value];
  }

  addPlayer(name: string) {
    const trimmed = (name || '').trim();
    if (!trimmed) return;
    const players = [
      ...this.playersSubject.value,
      { id: Date.now().toString(), name: trimmed, score: 0 },
    ];
    this.playersSubject.next(players);
    this.save(players);
  }

  removePlayer(id: string) {
    const players = this.playersSubject.value.filter((player) => player.id !== id);
    this.playersSubject.next(players);
    this.save(players);
  }

  updateScore(id: string, pointDelta: number) {
    const players = this.playersSubject.value.map((p) =>
      p.id === id ? { ...p, score: p.score + pointDelta } : p
    );
    this.playersSubject.next(players);
    this.save(players);
  }

  completeRound(roundScores: Readonly<Record<string, number | null>>) {
    const players = this.playersSubject.value.map((p) =>
      p.id in roundScores && Number.isFinite(roundScores[p.id])
        ? { ...p, score: p.score + (roundScores[p.id] ?? 0) }
        : p
    );
    this.playersSubject.next(players);
    this.save(players);
  }

  resetScores() {
    const players = this.playersSubject.value.map((player) => ({
      ...player,
      score: 0,
    }));
    this.playersSubject.next(players);
    this.save(players);
  }

  resetGame() {
    const players: Player[] = [];
    this.playersSubject.next(players);
    localStorage.removeItem(STORAGE_KEY);
  }
}
