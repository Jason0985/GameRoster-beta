import { Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { NotificationsService } from '../../services/notifications.service';
import { SessionService } from '../../services/session.service';
import { NotificationItem } from './notification.model';

@Component({
  selector: 'app-notifications',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, RouterLink],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {
  private readonly notificationsService = inject(NotificationsService);
  readonly session = inject(SessionService);
  readonly notifications = signal<NotificationItem[]>([]);
  readonly loading = signal(true);
  readonly swipeOffsets = signal<Record<string, number>>({});
  readonly swipeDirections = signal<Record<string, 'left' | 'right'>>({});
  private loadedUserId: string | null = null;
  private activeSwipeId: string | null = null;
  private touchStartX: number | null = null;
  private readonly swipeThreshold = 84;

  constructor() {
    effect(() => {
      const userId = this.session.user()?.id;
      if (this.session.initialized() && userId && userId !== this.loadedUserId) {
        this.loadedUserId = userId;
        void this.loadNotifications(userId);
      }
    });
  }

  private async loadNotifications(userId: string): Promise<void> {
    this.notifications.set(await this.notificationsService.getNotifications(userId));
    this.loading.set(false);
  }

  removeNotification(notificationId: string): void {
    this.notifications.update((items) => items.filter((item) => item.id !== notificationId));
    this.clearSwipeState(notificationId);
  }

  handleNotification(notificationId: string, _action: 'accepted' | 'rejected'): void {
    this.removeNotification(notificationId);
  }

  startSwipe(event: TouchEvent, notificationId: string): void {
    this.activeSwipeId = notificationId;
    this.touchStartX = event.changedTouches[0]?.clientX ?? null;
    this.swipeDirections.update((directions) => {
      const nextDirections = { ...directions };
      delete nextDirections[notificationId];
      return nextDirections;
    });
  }

  moveSwipe(event: TouchEvent, notificationId: string): void {
    if (this.touchStartX === null || this.activeSwipeId !== notificationId) {
      return;
    }

    const currentX = event.touches[0]?.clientX ?? this.touchStartX;
    const offset = currentX - this.touchStartX;
    const limitedOffset = Math.sign(offset) * Math.min(Math.abs(offset), 180);
    this.swipeOffsets.update((offsets) => ({ ...offsets, [notificationId]: limitedOffset }));
  }

  finishSwipe(event: TouchEvent, notificationId: string): void {
    if (this.touchStartX === null || this.activeSwipeId !== notificationId) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? this.touchStartX;
    const offset = touchEndX - this.touchStartX;
    if (Math.abs(offset) >= this.swipeThreshold) {
      const direction = offset < 0 ? 'left' : 'right';
      this.swipeDirections.update((directions) => ({ ...directions, [notificationId]: direction }));
      this.swipeOffsets.update((offsets) => ({
        ...offsets,
        [notificationId]: direction === 'left' ? -window.innerWidth : window.innerWidth,
      }));
      window.setTimeout(() => this.removeNotification(notificationId), 220);
    } else {
      this.resetSwipeOffset(notificationId);
    }

    this.touchStartX = null;
    this.activeSwipeId = null;
  }

  getSwipeOffset(notificationId: string): number {
    return this.swipeOffsets()[notificationId] ?? 0;
  }

  isSwipeReady(notificationId: string): boolean {
    return Math.abs(this.getSwipeOffset(notificationId)) >= this.swipeThreshold;
  }

  isSwipeRemoving(notificationId: string): boolean {
    return this.swipeDirections()[notificationId] !== undefined;
  }

  private resetSwipeOffset(notificationId: string): void {
    this.swipeOffsets.update((offsets) => ({ ...offsets, [notificationId]: 0 }));
    this.activeSwipeId = null;
  }

  private clearSwipeState(notificationId: string): void {
    this.swipeOffsets.update((offsets) => {
      const nextOffsets = { ...offsets };
      delete nextOffsets[notificationId];
      return nextOffsets;
    });
    this.swipeDirections.update((directions) => {
      const nextDirections = { ...directions };
      delete nextDirections[notificationId];
      return nextDirections;
    });
  }

  formatTime(createdAt: string): string {
    const elapsedMinutes = Math.max(1, Math.floor((Date.now() - Date.parse(createdAt)) / 60000));

    if (elapsedMinutes < 60) {
      return `vor ${elapsedMinutes} Min.`;
    }

    const elapsedHours = Math.floor(elapsedMinutes / 60);
    if (elapsedHours < 24) {
      return `vor ${elapsedHours} Std.`;
    }

    return `vor ${Math.floor(elapsedHours / 24)} Tagen`;
  }
}
