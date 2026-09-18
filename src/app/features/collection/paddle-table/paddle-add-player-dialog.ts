import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-paddle-add-player-dialog',
  imports: [FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './paddle-add-player-dialog.html',
  styleUrl: './paddle-add-player-dialog.scss',
})
export class PaddleAddPlayerDialog {
  readonly dialogRef = inject(MatDialogRef<PaddleAddPlayerDialog>);
  name = '';

  cancel(): void {
    this.dialogRef.close();
  }

  add(): void {
    const trimmedName = this.name.trim();
    if (trimmedName) {
      this.dialogRef.close(trimmedName);
    }
  }
}
