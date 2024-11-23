import { Component, inject, output } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [],
  templateUrl: './room-form.component.html',
  styleUrl: './room-form.component.scss',
})
export class RoomFormComponent {
  submit$ = output<string>();

  private playerService = inject(PlayerService);

  createRoom(): void {
    this.playerService.createRoom().subscribe((idRoom) => {
      this.submit$.emit(idRoom);
    });
  }
}
