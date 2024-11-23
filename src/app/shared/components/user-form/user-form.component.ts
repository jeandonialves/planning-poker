import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ulid } from 'ulid';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '../../services/player/player.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  submit$ = output<void>();

  userForm: FormGroup;

  private fb = inject(FormBuilder);
  private playerService = inject(PlayerService);

  constructor() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  submitHandler(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const player: Player = {
      id: ulid(),
      name: form.controls['name'].value,
      roomId: '',
    };

    this.playerService.register(player);

    this.submit$.emit();
  }
}
