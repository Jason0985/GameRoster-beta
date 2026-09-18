import { Injectable, signal, computed } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { supabase } from '../supabase.client';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  // Der aktuell eingeloggte User (oder null)
  private readonly currentUser = signal<User | null>(null);

  // Nach außen nur lesbar
  readonly user = this.currentUser.asReadonly();
  readonly isLoggedIn = computed(() => this.currentUser() !== null);

  // Bequeme Zugriffe auf die Metadaten aus der Registrierung
  readonly displayName = computed(
    () => this.currentUser()?.user_metadata?.['display_name'] ?? ''
  );
  readonly username = computed(
    () => this.currentUser()?.user_metadata?.['username'] ?? ''
  );

  constructor() {
    // Beim Start die vorhandene Session laden (z. B. nach Reload)
    supabase.auth.getSession().then(({ data }) => {
      this.currentUser.set(data.session?.user ?? null);
    });

    // Auf Login/Logout reagieren
    supabase.auth.onAuthStateChange((_event, session) => {
      this.currentUser.set(session?.user ?? null);
    });
  }
}