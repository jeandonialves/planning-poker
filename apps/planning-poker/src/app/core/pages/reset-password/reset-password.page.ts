import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Component, inject, model } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [NzFormModule, NzButtonModule, NzInputModule, FormsModule, RouterModule],
  templateUrl: './reset-password.page.html',
  styleUrl: './reset-password.page.scss',
})
export class ResetPasswordPage {
  private supabase = injectSupabase();
  private notificationService = inject(NzNotificationService);
  private router = inject(Router);

  password = model('');

  async submit() {
    const { error } = await this.supabase.auth.updateUser({ password: this.password() });

    if (error) {
      this.notificationService.error('Erro', error.message);
      return;
    } else {
      this.notificationService.success('Senha alterada', 'Senha alterada com sucesso');
      this.password.set('');
      this.router.navigate(['/']);
    }
  }
}
