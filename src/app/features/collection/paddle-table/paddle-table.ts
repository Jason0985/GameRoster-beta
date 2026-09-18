import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { ConfirmationDialog } from '../../../confirmation-dialog';
import { PaddleAddPlayerDialog } from './paddle-add-player-dialog';
import { PaddleAddDebtDialog, PaddleDebtSelection } from './paddle-add-debt-dialog';
import { PaddlePlayer } from './paddle-player.model';
import { PaddleService } from './paddle.service';

@Component({
  selector: 'app-paddle-table',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './paddle-table.html',
  styleUrl: './paddle-table.scss',
})
export class PaddleTable {
  readonly paddle = inject(PaddleService);
  private readonly dialog = inject(MatDialog);
  readonly expandedPlayerIds = signal<Set<string>>(new Set());
  readonly sortedPlayers = computed(() =>
    this.paddle
      .players()
      .slice()
      .sort((a, b) => b.balance - a.balance || b.wins - a.wins),
  );

  readonly playerDebtDetails = computed(() =>
    this.sortedPlayers().map((player) => {
      const owedTo = new Map<string, number>();
      const owedBy = new Map<string, number>();

      for (const entry of this.paddle.debtEntries()) {
        const isWinner = entry.winnerIds.includes(player.id);
        const isLoser = entry.loserIds.includes(player.id);

        if (isWinner) {
          for (const loserId of entry.loserIds) {
            owedBy.set(loserId, (owedBy.get(loserId) ?? 0) + this.paddle.winValue);
          }
        }

        if (isLoser) {
          for (const winnerId of entry.winnerIds) {
            owedTo.set(winnerId, (owedTo.get(winnerId) ?? 0) + this.paddle.winValue);
          }
        }
      }

      const netDebts = new Map<string, number>();
      for (const playerId of new Set([...owedTo.keys(), ...owedBy.keys()])) {
        const netAmount = (owedTo.get(playerId) ?? 0) - (owedBy.get(playerId) ?? 0);
        if (netAmount !== 0) {
          netDebts.set(playerId, netAmount);
        }
      }

      const netOwedTo = new Map([...netDebts.entries()].filter(([, amount]) => amount > 0));
      const netOwedBy = new Map(
        [...netDebts.entries()]
          .map(([playerId, amount]) => [playerId, Math.abs(amount)] as const)
          .filter(([playerId]) => (netDebts.get(playerId) ?? 0) < 0),
      );

      return {
        player,
        owedTo: this.toDebtList(netOwedTo),
        owedBy: this.toDebtList(netOwedBy),
        totalToPay: this.total(netOwedTo),
      };
    }),
  );

  private toDebtList(debts: Map<string, number>): { player: PaddlePlayer; amount: number }[] {
    return [...debts.entries()]
      .map(([playerId, amount]) => ({
        player: this.paddle.players().find((player) => player.id === playerId),
        amount,
      }))
      .filter((debt): debt is { player: PaddlePlayer; amount: number } => !!debt.player);
  }

  private total(debts: Map<string, number>): number {
    return [...debts.values()].reduce((sum, amount) => sum + amount, 0);
  }

  togglePlayer(playerId: string): void {
    this.expandedPlayerIds.update((expandedIds) => {
      const nextExpandedIds = new Set(expandedIds);
      if (nextExpandedIds.has(playerId)) {
        nextExpandedIds.delete(playerId);
      } else {
        nextExpandedIds.add(playerId);
      }
      return nextExpandedIds;
    });
  }

  isPlayerExpanded(playerId: string): boolean {
    return this.expandedPlayerIds().has(playerId);
  }

  expandAllPlayers(): void {
    this.expandedPlayerIds.set(new Set(this.sortedPlayers().map((player) => player.id)));
  }

  collapseAllPlayers(): void {
    this.expandedPlayerIds.set(new Set());
  }

  openAddDebtDialog(): void {
    this.dialog
      .open(PaddleAddDebtDialog)
      .afterClosed()
      .subscribe((selection: PaddleDebtSelection | undefined) => {
        if (selection) {
          this.paddle.addDebtEntry(selection.winnerIds, selection.loserIds);
        }
      });
  }

  openAddPlayerDialog(): void {
    this.dialog
      .open(PaddleAddPlayerDialog)
      .afterClosed()
      .subscribe((name: string | undefined) => {
        if (name) {
          this.paddle.addPlayer(name);
        }
      });
  }

  formatBalance(balance: number): string {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(balance);
  }

  endGame(): void {
    this.dialog
      .open(ConfirmationDialog, {
        data: {
          title: 'Paddle-Spiel beenden?',
          message: 'Alle Spielstände werden gelöscht und können nicht wiederhergestellt werden.',
          confirmLabel: 'Spiel beenden',
          icon: 'warning',
        },
      })
      .afterClosed()
      .subscribe((confirmed: boolean | undefined) => {
        if (confirmed) {
          this.paddle.endGame();
        }
      });
  }
}
