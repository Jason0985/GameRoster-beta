import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { ConfirmationDialog } from '../../../confirmation-dialog';
import { PaddleAddPlayerDialog } from './paddle-add-player-dialog';
import { PaddleService } from './paddle.service';

@Component({
  selector: 'app-paddle-table',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './paddle-table.html',
  styleUrl: './paddle-table.scss',
})
export class PaddleTable {
  readonly paddle = inject(PaddleService);
  private readonly dialog = inject(MatDialog);
  readonly sortedPlayers = computed(() =>
    this.paddle
      .players()
      .slice()
      .sort((a, b) => b.balance - a.balance || b.wins - a.wins),
  );

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
