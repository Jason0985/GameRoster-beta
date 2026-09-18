import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PaddleService } from './paddle.service';

@Component({
  selector: 'app-paddle-set-value-dialog',
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './paddle-set-value-dialog.html',
  styleUrl: './paddle-set-value-dialog.scss',
})
export class PaddleSetValueDialog {
  readonly dialogRef = inject(MatDialogRef<PaddleSetValueDialog>);
  readonly paddle = inject(PaddleService);
  amountInput = this.paddle.winValue().toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  get parsedAmount(): number {
    return Number(this.amountInput.trim().replace(',', '.'));
  }

  get isValid(): boolean {
    return Number.isFinite(this.parsedAmount) && this.parsedAmount > 0;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.isValid) {
      this.dialogRef.close(this.parsedAmount);
    }
  }
}
