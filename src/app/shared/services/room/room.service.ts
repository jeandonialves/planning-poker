import { Injectable, inject } from '@angular/core';
import {
  Observable,
  catchError,
  from,
  map,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { PlayerService } from '../player/player.service';
import { Room } from './room.model';
import { ulid } from 'ulid';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Player } from '../player/player.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private db = inject(AngularFireDatabase);
  private playerService = inject(PlayerService);

  create(): Observable<string> {
    const player = this.playerService.get();

    if (player) {
      const room: Room = {
        createByPlayer: player.id,
        players: {},
        displayEstimates: false,
      };

      const idRoom = ulid();

      return from(this.db.list('rooms').set(idRoom, room)).pipe(
        tap(() => {
          player.roomId = idRoom;
          this.playerService.update(player);
        }),
        map(() => idRoom)
      );
    }

    return throwError(() => new Error('player was not registered'));
  }

  getById(id: string) {
    return from(this.db.database.ref(`rooms/${id}`).get());
  }

  addPlayer(idRoom: string): void {
    const player = this.playerService.get();

    if (player) {
      this.db.list(`rooms/${idRoom}/players`).set(player.id, {
        name: player.name,
        card: null,
      });
    }
  }

  leave(idRoom: string): void {
    const player = this.playerService.get();

    if (player) {
      this.db.object(`rooms/${idRoom}/players/${player.id}`).remove();
    }
  }

  getRoom(id: string): Observable<any> {
    return this.db.object(`rooms/${id}`).valueChanges();
  }

  getPlayers(idRoom: string): Observable<any> {
    return this.db.list(`rooms/${idRoom}/players`).valueChanges();
  }

  updateDisplayEstimated(idRoom: string, displayEstimates: boolean): void {
    this.db.object(`rooms/${idRoom}`).update({
      displayEstimates: displayEstimates,
    });
  }

  updateEstimate(idRoom: string, estimated: string): void {
    const player = this.playerService.get();

    if (player) {
      this.db.object(`rooms/${idRoom}/players/${player.id}`).update({
        estimated: estimated,
      });
    }
  }

  deleteEstimates(idRoom: string): Observable<void> {
    const itemsRef = from(
      this.db.database.ref(`rooms/${idRoom}/players`).get()
    );

    return itemsRef.pipe(
      map((res) => res.val()),
      switchMap((snapshot) => {
        const promises = Object.entries(snapshot).map(([key]) => {
          if (key) {
            return this.db
              .object(`rooms/${idRoom}/players/${key}`)
              .update({ estimated: null });
          }
          return Promise.resolve();
        });

        return from(Promise.all(promises));
      }),
      map(() => {}),
      catchError((error) => {
        throw error;
      })
    );
  }
}
