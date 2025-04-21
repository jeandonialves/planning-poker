import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { from, mergeMap, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { iRoom } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomApi {
  private readonly ROOM_TABLE = 'rooms';

  private supabase = injectSupabase();

  add(ownerId: string): Observable<iRoom> {
    return from(
      this.supabase
        .from(this.ROOM_TABLE)
        .insert([{ owner_id: ownerId }])
        .select(),
    ) as unknown as Observable<iRoom>;
  }

  getById(roomId: string): Observable<iRoom> {
    return from(
      this.supabase
        .from(this.ROOM_TABLE)
        .select(
          `id,
           owner:owner_id (
             id,
             full_name,
             email, 
             avatar_url
          )`,
        )
        .eq('id', roomId)
        .single(),
    ).pipe(
      mergeMap(({ data, error }) => {
        if (error) {
          return throwError(() => error);
        }

        const room: iRoom = {
          ...data,
          owner: Array.isArray(data.owner) ? data.owner[0] : data.owner,
        };

        return [room];
      }),
    );
  }
}
