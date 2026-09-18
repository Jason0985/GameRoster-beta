import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';
import { FriendsService } from '../../services/friends.service';
import { ProfileService } from '../../services/profile.service';
import { Profile as UserProfile } from './profile.model';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, MatButton, MatTooltip, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private readonly authService = inject(AuthService);
  private readonly friendsService = inject(FriendsService);
  private readonly profileService = inject(ProfileService);
  readonly session = inject(SessionService);
  readonly friendSearch = signal('');
  readonly friendResults = signal<UserProfile[]>([]);
  readonly friendSearchLoading = signal(false);
  readonly addedFriendIds = signal<Set<string>>(new Set());
  private searchTimeout: ReturnType<typeof setTimeout> | undefined;

  async logout(): Promise<void> {
    await this.authService.logout();
  }

  searchFriends(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.trim();
    this.friendSearch.set(searchTerm);
    this.friendResults.set([]);

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    if (searchTerm.length < 2 || !this.session.user()?.id) {
      this.friendSearchLoading.set(false);
      return;
    }

    this.friendSearchLoading.set(true);
    this.searchTimeout = setTimeout(async () => {
      const userId = this.session.user()?.id;
      if (!userId) {
        this.friendSearchLoading.set(false);
        return;
      }

      this.friendResults.set(await this.profileService.searchProfiles(searchTerm, userId));
      this.friendSearchLoading.set(false);
    }, 250);
  }

  async addFriend(friendId: string): Promise<void> {
    const userId = this.session.user()?.id;
    if (!userId || this.addedFriendIds().has(friendId)) {
      return;
    }

    const added = await this.friendsService.addFriend(userId, friendId);
    if (added) {
      this.addedFriendIds.update((ids) => new Set(ids).add(friendId));
    }
  }
}
