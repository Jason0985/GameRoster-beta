export type NotificationType = 'game_invite' | 'friend_request';

export interface NotificationItem {
  id: string;
  recipient_id: string;
  sender_id: string | null;
  sender_name: string;
  type: NotificationType;
  title: string;
  message: string;
  related_id: string | null;
  created_at: string;
}
