import { Component, inject, output } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './room-form.component.html',
  styleUrl: './room-form.component.scss',
})
export class RoomFormComponent {
  submit$ = output<string>();

  roomForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private playerService = inject(PlayerService);

  constructor() {
    this.roomForm = this.fb.group({
      idRoom: ['', Validators.required],
    });
  }

  createRoom(): void {
    this.playerService.createRoom().subscribe((idRoom) => {
      this.submit$.emit(idRoom);
    });
  }

  submitHandler(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this.router.navigateByUrl(`/sala/${form.value.idRoom}`);
  }
}
