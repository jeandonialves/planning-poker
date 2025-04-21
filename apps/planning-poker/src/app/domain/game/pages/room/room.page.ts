import { PlayersComponent } from '@domain/game/components/players/players.component';
import { eParticipantVote } from '@domain/game/enums/participant-vote.enum';
import { GameService } from '@domain/game/services/game.service';
import { iRoom } from '@domain/game/interfaces/room.interface';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule, PlayersComponent],
  templateUrl: './room.page.html',
  styleUrl: './room.page.scss',
})
export class RoomPage implements OnInit {
  private gameService = inject(GameService);
  private activatedRoute = inject(ActivatedRoute);

  roomId: string;
  room$!: Observable<iRoom>;

  constructor() {
    this.roomId = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    this.room$ = this.gameService.getRoomById(this.roomId);
  }

  deleteEstimates(): void {
    this.gameService.deleteEstimates(this.roomId).subscribe();
  }

  vote(): void {
    this.gameService.estimate(this.roomId, eParticipantVote.COFFEE).subscribe();
  }
}
