import { Injectable, signal } from '@angular/core';
import { PaddlePlayer } from './paddle-player.model';

const STORAGE_KEY = 'gameroster:paddle-players';
const WIN_VALUE = 2.5;

@Injectable({ providedIn: 'root' })
export class PaddleService {
  readonly winValue = WIN_VALUE;
  readonly players = signal<PaddlePlayer[]>(this.loadPlayers());

  addPlayer(name: string): void {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    this.players.update((players) => [
      ...players,
      {
        id: crypto.randomUUID(),
        name: trimmedName,
        wins: 0,
        losses: 0,
        balance: 0,
      },
    ]);
    this.persist();
  }

  removePlayer(playerId: string): void {
    this.players.update((players) => players.filter((player) => player.id !== playerId));
    this.persist();
  }

  recordWin(playerId: string): void {
    this.updatePlayer(playerId, (player) => ({
      ...player,
      wins: player.wins + 1,
      balance: player.balance + WIN_VALUE,
    }));
  }

  recordLoss(playerId: string): void {
    this.updatePlayer(playerId, (player) => ({
      ...player,
      losses: player.losses + 1,
      balance: player.balance - WIN_VALUE,
    }));
  }

  endGame(): void {
    this.players.set([]);
    this.persist();
  }

  private updatePlayer(playerId: string, update: (player: PaddlePlayer) => PaddlePlayer): void {
    this.players.update((players) =>
      players.map((player) => (player.id === playerId ? update(player) : player)),
    );
    this.persist();
  }

  private persist(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.players()));
    } catch {}
  }

  private loadPlayers(): PaddlePlayer[] {
    try {
      const rawPlayers = localStorage.getItem(STORAGE_KEY);
      if (!rawPlayers) return [];

      const players = JSON.parse(rawPlayers) as PaddlePlayer[];
      return Array.isArray(players) ? players : [];
    } catch {
      return [];
    }
  }
}
