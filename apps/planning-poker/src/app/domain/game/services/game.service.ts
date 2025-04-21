import { AuthService } from '@domain/auth/services/auth.service';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { iParticipant } from '../interfaces/participant.interface';
import { eParticipantVote } from '../enums/participant-vote.enum';
import { ParticipantApi } from '../apis/participant.api';
import { iRoom } from '../interfaces/room.interface';
import { RoomApi } from '../apis/room.api';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private roomApi = inject(RoomApi);
  private participantApi = inject(ParticipantApi);

  private authService = inject(AuthService);

  createRoom(): Observable<iRoom> {
    const userId = this.authService.currentUser()?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.roomApi.add(userId);
  }

  getRoomById(roomId: string): Observable<iRoom> {
    return this.roomApi.getById(roomId);
  }

  addParticipant(roomId: string): Observable<iParticipant> {
    const userId = this.authService.currentUser()?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }

    return this.participantApi.add(userId, roomId);
  }

  getParticipants(roomId: string): Observable<iParticipant[]> {
    return this.participantApi.getAllByRoom(roomId);
  }

  getParticipant(userId: string, roomId: string): Observable<iParticipant> {
    return this.participantApi.getParticipant(userId, roomId);
  }

  estimate(roomId: string, vote: eParticipantVote) {
    const userId = this.authService.currentUser()?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }

    return this.participantApi.update(userId, roomId, { vote });
  }

  deleteEstimates(roomId: string): Observable<void> {
    return this.participantApi.deleteEstimates(roomId, { vote: eParticipantVote.NONE });
  }
}
