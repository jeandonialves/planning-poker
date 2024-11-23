import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { UserFormComponent } from '../../shared/components/user-form/user-form.component';
import { RoomFormComponent } from '../../shared/components/room-form/room-form.component';
import { PlayerService } from '../../shared/services/player/player.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, UserFormComponent, RoomFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showForm = {
    userForm: true,
    roomForm: false,
  };

  private router = inject(Router);
  private playerService = inject(PlayerService);

  constructor() {
    if (this.playerService.get()) {
      this.showRoomForm();
    }
  }

  roomCreated(id: string): void {
    this.router.navigateByUrl(`/sala/${id}`);
  }

  submitUserForm(): void {
    this.showRoomForm();
  }

  private showRoomForm(): void {
    this.showForm.userForm = false;
    this.showForm.roomForm = true;
  }
}
