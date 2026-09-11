import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  todos: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.loadTodos();
  }

  async loadTodos(): Promise<void> {
    const { data, error } = await this.supabaseService.getTodos();

    if (error) {
      console.error('Fehler beim Laden der Todos:', error);
      return;
    }

    console.log('Geladene Todos:', data);
    this.todos = data ?? [];
  }
}