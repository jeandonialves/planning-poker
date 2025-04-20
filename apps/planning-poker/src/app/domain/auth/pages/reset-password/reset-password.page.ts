import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '@domain/auth/services/auth.service';
import { Component, inject, model } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [NzFormModule, NzButtonModule, NzInputModule, NzCardModule, FormsModule, RouterModule],
  templateUrl: './reset-password.page.html',
  styleUrl: './reset-password.page.scss',
})
export class ResetPasswordPage {
  private router = inject(Router);
  private authService = inject(AuthService);
  private notificationService = inject(NzNotificationService);

  password = model('');

  submit() {
    this.authService.updatePassword(this.password()).subscribe({
      next: result => {
        if (result.error) {
          this.notificationService.error('Erro', result.error.message);
        } else {
          this.notificationService.success('Senha alterada', 'Senha alterada com sucesso');
          this.password.set('');
          this.router.navigate(['/']);
        }
      },
    });
  }
}
