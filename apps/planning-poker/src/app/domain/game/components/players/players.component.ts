import { iParticipant } from '@domain/game/interfaces/participant.interface';
import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { GameService } from '@domain/game/services/game.service';
import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-players',
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
  roomId = input<string>('');

  private supabase = injectSupabase();
  private gameService = inject(GameService);

  private participantsSubject: BehaviorSubject<iParticipant[]> = new BehaviorSubject<iParticipant[]>([]);
  participants$ = this.participantsSubject.asObservable();

  ngOnInit(): void {
    this.getParticipants();
  }

  private getParticipants(): void {
    this.gameService.getParticipants(this.roomId()).subscribe(participants => {
      this.participantsSubject.next(participants);
    });

    this.supabase
      .channel('custom-all-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'participants',
          filter: `room_id=eq.${this.roomId()}`,
        },
        payload => {
          if (payload.eventType === 'INSERT') {
            this.gameService.getParticipant(payload.new['user_id'], this.roomId()).subscribe(participant => {
              this.participantsSubject.next([...this.participantsSubject.value, participant]);
            });
          }

          if (payload.eventType === 'UPDATE') {
            const participants = this.participantsSubject.value.map(item => (item.user.id === payload.new['user_id'] ? { ...item, ...payload.new } : item));
            this.participantsSubject.next(participants);
          }

          if (payload.eventType === 'DELETE') {
            const participants = this.participantsSubject.value.filter(item => item.user.id !== payload.old['user_id']);
            this.participantsSubject.next(participants);
          }
        },
      )
      .subscribe();
  }
}
