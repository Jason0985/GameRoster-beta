import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { PaddleService } from './paddle.service';

export interface PaddleDebtSelection {
  winnerIds: string[];
  loserIds: string[];
  rounds: number;
}

@Component({
  selector: 'app-paddle-add-debt-dialog',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
  ],
  templateUrl: './paddle-add-debt-dialog.html',
  styleUrl: './paddle-add-debt-dialog.scss',
})
export class PaddleAddDebtDialog {
  readonly dialogRef = inject(MatDialogRef<PaddleAddDebtDialog>);
  readonly paddle = inject(PaddleService);
  readonly players = computed(() => this.paddle.players());
  winners: string[] = [];
  losers: string[] = [];
  rounds = 1;

  get participantCount(): number {
    return this.winners.length + this.losers.length;
  }

  get isValid(): boolean {
    return (
      this.winners.length > 0 &&
      this.losers.length > 0 &&
      this.participantCount >= 2 &&
      Number.isInteger(this.rounds) &&
      this.rounds >= 1
    );
  }

  selectedPlayerNames(playerIds: string[]): string {
    return playerIds
      .map((playerId) => this.players().find((player) => player.id === playerId)?.name)
      .filter((name): name is string => !!name)
      .join(', ');
  }

  isOptionDisabled(playerId: string, team: 'winner' | 'loser'): boolean {
    const selectedInOtherTeam = team === 'winner' ? this.losers : this.winners;
    const selectedInThisTeam = team === 'winner' ? this.winners : this.losers;

    return (
      selectedInOtherTeam.includes(playerId) ||
      (!selectedInThisTeam.includes(playerId) && this.participantCount >= 4)
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }

  add(): void {
    if (this.isValid) {
      this.dialogRef.close({
        winnerIds: this.winners,
        loserIds: this.losers,
        rounds: this.rounds,
      } satisfies PaddleDebtSelection);
    }
  }
}
