import { Injectable } from '@angular/core';
import { supabase } from './supabase.client';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  getTodos() {
    return supabase.from('todos').select('*');
  }
}