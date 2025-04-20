import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '@domain/auth/services/auth.service';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Component, inject, model } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [NzFormModule, NzButtonModule, NzInputModule, NzTypographyModule, NzDividerModule, NzCardModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.page.html',
  styleUrl: './forgot-password.page.scss',
})
export class ForgotPasswordPage {
  private authService = inject(AuthService);
  private notificationService = inject(NzNotificationService);

  email = model('');

  submit() {
    this.authService.resetPassword(this.email()).subscribe({
      next: result => {
        if (result.error) {
          this.notificationService.error('Erro', result.error.message);
        } else {
          this.notificationService.success('Email enviado', 'Verifique sua caixa de entrada');
          this.email.set('');
        }
      },
    });
  }
}
