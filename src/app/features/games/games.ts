import { Component, computed, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

interface GameApp {
  title: string;
  category: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-games',
  imports: [MatIcon],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Apps {
  readonly searchTerm = signal('');

  readonly gameApps: GameApp[] = [
    { title: 'Flip 7', category: 'Kartenspiel', description: 'Risiko eingehen, Karten aufdecken und Punkte sammeln.', icon: 'casino' },
  ];

  readonly filteredApps = computed(() => {
    const searchTerm = this.searchTerm().trim().toLowerCase();

    if (!searchTerm) {
      return this.gameApps;
    }

    return this.gameApps.filter((gameApp) =>
      `${gameApp.title} ${gameApp.category} ${gameApp.description}`
        .toLowerCase()
        .includes(searchTerm)
    );
  });

  updateSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }
}
