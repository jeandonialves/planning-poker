import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { from, mergeMap, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { iParticipant } from '../interfaces/participant.interface';
import { eParticipantVote } from '../enums/participant-vote.enum';
import { eParticipantRole } from '../enums/participant-role.enum';

@Injectable({
  providedIn: 'root',
})
export class ParticipantApi {
  private readonly PARTICIPANT_TABLE = 'participants';

  private supabase = injectSupabase();

  add(userId: string, roomId: string): Observable<iParticipant> {
    return from(
      this.supabase
        .from(this.PARTICIPANT_TABLE)
        .insert([{ user_id: userId, room_id: roomId, role: eParticipantRole.PLAYER, vote: eParticipantVote.NONE }])
        .select(),
    ) as unknown as Observable<iParticipant>;
  }

  getParticipant(userId: string, roomId: string): Observable<iParticipant> {
    return from(
      this.supabase
        .from(this.PARTICIPANT_TABLE)
        .select(
          `role,
            vote,
            user:user_id (
              id,
              full_name,
              email, 
              avatar_url
            )`,
        )
        .eq('user_id', userId)
        .eq('room_id', roomId)
        .single(),
    ).pipe(
      mergeMap(({ data, error }) => {
        if (error) {
          return throwError(() => error);
        }

        const participant: iParticipant = {
          ...data,
          user: Array.isArray(data.user) ? data.user[0] : data.user,
        };

        return [participant];
      }),
    );
  }

  update(userId: string, roomId: string, data: Partial<iParticipant>): Observable<iParticipant> {
    return from(this.supabase.from(this.PARTICIPANT_TABLE).update(data).eq('user_id', userId).eq('room_id', roomId).select().single()) as unknown as Observable<iParticipant>;
  }

  deleteEstimates(roomId: string, data: Partial<iParticipant>): Observable<void> {
    return from(this.supabase.from(this.PARTICIPANT_TABLE).update(data).eq('room_id', roomId)) as unknown as Observable<void>;
  }

  getAllByRoom(roomId: string): Observable<iParticipant[]> {
    return from(
      this.supabase
        .from(this.PARTICIPANT_TABLE)
        .select(
          `role,
            vote,
            user:user_id (
              id,
              full_name,
              email, 
              avatar_url
            )`,
        )
        .eq('room_id', roomId),
    ).pipe(
      mergeMap(({ data, error }) => {
        if (error) {
          return throwError(() => error);
        }

        const participants = (data || []).map((participant: any) => ({
          ...participant,
          user: Array.isArray(participant.user) ? participant.user[0] : participant.user,
        }));

        return [participants];
      }),
    );
  }
}
