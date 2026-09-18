import { Injectable } from '@angular/core';
import { supabase } from '../supabase.client';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  async addFriend(userId: string, friendId: string): Promise<boolean> {
    const { error } = await supabase.from('friendships').insert({
      requester_id: userId,
      addressee_id: friendId,
      status: 'pending',
    });

    return !error;
  }
}
