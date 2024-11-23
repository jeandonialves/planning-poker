import { Injectable, inject } from '@angular/core';
import { Player, Room } from './player.model';
import { StorageService } from '../storage/storage.service';
import { Observable, from, map, tap, throwError } from 'rxjs';
import { ulid } from 'ulid';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private readonly KEY_PLAYER = 'player';

  private storageService = inject(StorageService);
  private db = inject(AngularFireDatabase);

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

  createRoom(): Observable<string> {
    const player = this.get();

    if (player) {
      const room: Room = {
        createByPlayer: player.id,
        players: {},
      };

      const idRoom = ulid();

      return from(this.db.list('rooms').set(idRoom, room)).pipe(
        tap(() => {
          player.roomId = idRoom;
          this.update(player);
        }),
        map(() => idRoom)
      );
    }

    return throwError(() => new Error('player was not registered'));
  }
}
