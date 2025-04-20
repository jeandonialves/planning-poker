import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '@domain/auth/services/auth.service';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [NzFormModule, NzButtonModule, NzInputModule, NzTypographyModule, NzCardModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.page.html',
  styleUrl: './sign-up.page.scss',
})
export class SignUpPage {
  private router = inject(Router);
  private authService = inject(AuthService);
  private notificationService = inject(NzNotificationService);

  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      full_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (!this.signUpForm.valid) {
      this.notificationService.error('Error', 'Preencha os campos corretamente');
      return;
    }

    const rawForm = this.signUpForm.getRawValue();

    this.authService.register(rawForm.email, rawForm.password, rawForm.full_name).subscribe({
      next: result => {
        if (result.error) {
          this.notificationService.error('Erro', result.error.message);
        } else {
          this.notificationService.success('Sucesso', 'Usuário criado com sucesso');
          this.router.navigate(['/auth']);
        }
      },
    });
  }
}
