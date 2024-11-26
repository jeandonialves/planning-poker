import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { UserFormComponent } from '../../shared/components/user-form/user-form.component';
import { PlayerService } from '../../shared/services/player/player.service';
import { RoomService } from '../../shared/services/room/room.service';
import { PlayerInRoom, Room } from '../../shared/services/room/room.model';
import { OrderByPipe } from '../../shared/pipe/order-by.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, UserFormComponent, OrderByPipe],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent {
  readonly sequence = [
    { value: '1', color: 'bg-primary-subtle' },
    { value: '2', color: 'bg-secondary-subtle' },
    { value: '3', color: 'bg-success-subtle' },
    { value: '5', color: 'bg-info-subtle' },
    { value: '8', color: 'bg-warning-subtle' },
    { value: '13', color: 'bg-danger-subtle' },
  ];

  showUserForm = false;

  players: PlayerInRoom[] = [];
  room: Room | undefined;
  selectedEstimate = '';

  estimatedPlayer$: Observable<any> | undefined;

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

  leave(): void {
    this.roomService.leave(this.idRoom);
    this.router.navigateByUrl('/');
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

      this.setEstimatedByPlayer();
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

  private setEstimatedByPlayer(): void {
    this.estimatedPlayer$ = this.roomService.getEstimatedByPlayer(this.idRoom);
  }
}
