import { Injectable } from '@angular/core';
import { supabase } from '../supabase.client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  register(
    email: string,
    password: string,
    username: string,
    displayName: string
  ) {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          display_name: displayName,
        },
      },
    });
  }

  login(email: string, password: string) {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  logout() {
    return supabase.auth.signOut();
  }
}