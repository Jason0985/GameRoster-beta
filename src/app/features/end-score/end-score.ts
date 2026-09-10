import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { GameService } from '../../game.service';
import { Player } from '../../player.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-end-score',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './end-score.html',
  styleUrls: ['./end-score.scss'],
})
export class EndScore {
  players$: Observable<Player[]>;

  constructor(
    private game: GameService,
    private router: Router,
  ) {
    this.players$ = this.game.players$.pipe(
      map((players) => players.slice().sort((a, b) => b.score - a.score))
    );
  }

  trackById(_: number, player: Player) {
    return player.id;
  }

  startNewGame() {
    this.game.resetScores();
    this.router.navigate(['/']);
  }
}
