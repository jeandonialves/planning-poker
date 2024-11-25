import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { UserFormComponent } from '../../shared/components/user-form/user-form.component';
import { PlayerService } from '../../shared/services/player/player.service';
import { RoomService } from '../../shared/services/room/room.service';
import { PlayerInRoom, Room } from '../../shared/services/room/room.model';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent {
  showUserForm = false;

  players: PlayerInRoom[] = [];
  room: Room | undefined;

  private idRoom: string;
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private playerService = inject(PlayerService);
  private roomService = inject(RoomService);

  constructor() {
    this.idRoom = this.activatedRoute.snapshot.params['id'];
    this.getRoomById(this.idRoom);
    this.getPlayersInRoom();
    this.getRoom();
  }

  submitUserForm(): void {
    this.showUserForm = false;
    this.roomService.addPlayer(this.idRoom);
  }

  displayEstimatesHandler(): void {
    this.roomService.updateDisplayEstimated(this.idRoom, true);
  }

  deleteEstimate(): void {
    this.roomService.updateDisplayEstimated(this.idRoom, false);
    this.roomService.deleteEstimates(this.idRoom).subscribe();
  }

  estimatedHandler(value: string): void {
    this.roomService.updateEstimate(this.idRoom, value);
  }

  get playerName(): string {
    const player = this.playerService.get();
    if (player) {
      return player.name;
    }
    return '';
  }

  private getRoomById(idRoom: string): void {
    this.roomService.getById(idRoom).subscribe((res) => {
      if (!res.exists()) {
        this.router.navigate(['**']);
        return;
      }

      if (!this.playerService.get()) {
        this.showUserForm = true;
        return;
      }

      const player = this.playerService.get();
      if (!player) {
        return;
      }

      const room: Room = res.val();
      if (!room['players'] || !room.players[player.id]) {
        this.roomService.addPlayer(this.idRoom);
      }
    });
  }

  private getPlayersInRoom(): void {
    this.roomService.getPlayers(this.idRoom).subscribe((res) => {
      this.players = res as PlayerInRoom[];
    });
  }

  private getRoom(): void {
    this.roomService.getRoom(this.idRoom).subscribe((res) => {
      this.room = res as Room;
    });
  }
}
