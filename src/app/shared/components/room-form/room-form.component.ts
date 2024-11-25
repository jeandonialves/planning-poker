import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RoomService } from '../../services/room/room.service';
import { PlayerService } from '../../services/player/player.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './room-form.component.html',
  styleUrl: './room-form.component.scss',
})
export class RoomFormComponent {
  submit$ = output<string>();

  roomForm: FormGroup;
  codeRoom: string;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private roomService = inject(RoomService);
  private playerService = inject(PlayerService);

  constructor() {
    this.roomForm = this.fb.group({
      idRoom: ['', Validators.required],
    });

    this.codeRoom = this.playerRoomCode();
  }

  createRoom(): void {
    this.roomService.create().subscribe((idRoom) => {
      this.submit$.emit(idRoom);
    });
  }

  submitHandler(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this.router.navigateByUrl(`/sala/${form.value.idRoom}`);
  }

  private playerRoomCode(): string {
    const player = this.playerService.get();

    if (player) {
      return player.roomId;
    }
    return '';
  }
}
