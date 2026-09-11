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
    { title: 'Catan', category: 'Brettspiel', description: 'Siedlungen, Handel und große Runden.', icon: 'castle' },
    { title: 'Carcassonne', category: 'Plättchenspiel', description: 'Landschaften legen und Gebiete wachsen lassen.', icon: 'map' },
    { title: 'Azul', category: 'Familienspiel', description: 'Muster bauen und Punkte sammeln.', icon: 'grid_view' },
    { title: 'Wingspan', category: 'Strategie', description: 'Vögel sammeln und das beste Habitat bauen.', icon: 'flutter_dash' },
    { title: 'Terraforming Mars', category: 'Expertenspiel', description: 'Den roten Planeten gemeinsam verändern.', icon: 'public' },
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
