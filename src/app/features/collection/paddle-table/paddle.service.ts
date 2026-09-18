import { Injectable, signal } from '@angular/core';
import { PaddleDebtEntry, PaddlePlayer } from './paddle-player.model';

const STORAGE_KEY = 'gameroster:paddle-players';
const DEBTS_STORAGE_KEY = 'gameroster:paddle-debts';
const WIN_VALUE = 2.5;

@Injectable({ providedIn: 'root' })
export class PaddleService {
  readonly winValue = WIN_VALUE;
  readonly players = signal<PaddlePlayer[]>(this.loadPlayers());
  readonly debtEntries = signal<PaddleDebtEntry[]>(this.loadDebtEntries());

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

  addDebtEntry(winnerIds: string[], loserIds: string[]): void {
    const uniqueWinnerIds = [...new Set(winnerIds)];
    const uniqueLoserIds = [...new Set(loserIds)];
    const participantIds = new Set([...uniqueWinnerIds, ...uniqueLoserIds]);

    if (
      uniqueWinnerIds.length === 0 ||
      uniqueLoserIds.length === 0 ||
      participantIds.size < 2 ||
      participantIds.size > 4
    ) {
      return;
    }

    this.players.update((players) =>
      players.map((player) => {
        const wins = uniqueWinnerIds.includes(player.id) ? 1 : 0;
        const losses = uniqueLoserIds.includes(player.id) ? 1 : 0;

        return wins || losses
          ? {
              ...player,
              wins: player.wins + wins,
              losses: player.losses + losses,
              balance: player.balance + (wins - losses) * WIN_VALUE,
            }
          : player;
      }),
    );

    this.debtEntries.update((entries) => [
      ...entries,
      { id: crypto.randomUUID(), winnerIds: uniqueWinnerIds, loserIds: uniqueLoserIds },
    ]);
    this.persist();
    this.persistDebtEntries();
  }

  endGame(): void {
    this.players.set([]);
    this.debtEntries.set([]);
    this.persist();
    this.persistDebtEntries();
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

  private persistDebtEntries(): void {
    try {
      localStorage.setItem(DEBTS_STORAGE_KEY, JSON.stringify(this.debtEntries()));
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

  private loadDebtEntries(): PaddleDebtEntry[] {
    try {
      const rawEntries = localStorage.getItem(DEBTS_STORAGE_KEY);
      if (!rawEntries) return [];

      const entries = JSON.parse(rawEntries) as PaddleDebtEntry[];
      return Array.isArray(entries) ? entries : [];
    } catch {
      return [];
    }
  }
}
