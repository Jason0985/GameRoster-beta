import { Injectable } from '@angular/core';
import { supabase } from '../supabase.client';
import { NotificationItem } from '../features/notifications/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  async getNotifications(userId: string): Promise<NotificationItem[]> {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('recipient_id', userId)
      .order('created_at', { ascending: false });

    if (!error && data?.length) {
      return data as NotificationItem[];
    }

    return this.createMockNotifications(userId);
  }

  private createMockNotifications(userId: string): NotificationItem[] {
    const now = Date.now();

    return [
      {
        id: `${userId}-mock-game-invite`,
        recipient_id: userId,
        sender_id: `${userId}-mock-sender-1`,
        sender_name: 'Mara',
        type: 'game_invite',
        title: 'Spieleinladung',
        message: 'Mara lädt dich zu einer neuen Paddle-Runde ein.',
        related_id: `${userId}-mock-game`,
        created_at: new Date(now - 1000 * 60 * 18).toISOString(),
      },
      {
        id: `${userId}-mock-friend-request`,
        recipient_id: userId,
        sender_id: `${userId}-mock-sender-2`,
        sender_name: 'Jonas',
        type: 'friend_request',
        title: 'Freundschaftsanfrage',
        message: 'Jonas möchte dich zu seinen Freunden hinzufügen.',
        related_id: `${userId}-mock-friend`,
        created_at: new Date(now - 1000 * 60 * 60 * 3).toISOString(),
      },
    ];
  }
}
