import { NzNotificationService } from 'ng-zorro-antd/notification';
import { GameService } from '@domain/game/services/game.service';
import { AuthService } from '@domain/auth/services/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { Component, inject } from '@angular/core';

@Component({
  imports: [NzButtonModule, NzEmptyModule],
  templateUrl: './game.page.html',
  styleUrl: './game.page.scss',
})
export class GamePage {
  private authService = inject(AuthService);
  private gameService = inject(GameService);
  private notificationService = inject(NzNotificationService);

  onClick(): void {
    if (this.authService.isLoggedIn()) {
      const owner_id = this.authService.currentUser()?.id;
      console.log(owner_id);
      if (owner_id) {
        this.gameService.createRoom().subscribe({
          next: result => {
            this.notificationService.success('Sucesso', 'Sala criada com sucesso');
            console.log(result);
          },
        });
      }
    }
  }
}
