import { Injectable, inject } from '@angular/core';
import { Player } from './player.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private readonly KEY_PLAYER = 'player';

  private storageService = inject(StorageService);

  register(player: Player): void {
    this.storageService.setItem(this.KEY_PLAYER, JSON.stringify(player));
  }

  update(player: Player): void {
    this.storageService.setItem(this.KEY_PLAYER, JSON.stringify(player));
  }

  get(): Player | null {
    const player = this.storageService.getItem(this.KEY_PLAYER);

    if (player) {
      return JSON.parse(player) as Player;
    }
    return null;
  }
}
