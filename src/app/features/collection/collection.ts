import { Component, computed, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

interface CollectionItem {
  title: string;
  category: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-collection',
  imports: [MatIcon],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection {
  readonly searchTerm = signal('');

  readonly items: CollectionItem[] = [
    { title: 'Flip 7', category: 'Kartenspiel', description: 'Risiko eingehen, Karten aufdecken und Punkte sammeln.', icon: 'casino' },
  ];

  readonly filteredItems = computed(() => {
    const searchTerm = this.searchTerm().trim().toLowerCase();

    if (!searchTerm) {
      return this.items;
    }

    return this.items.filter((item) =>
      `${item.title} ${item.category} ${item.description}`
        .toLowerCase()
        .includes(searchTerm)
    );
  });

  updateSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }
}
