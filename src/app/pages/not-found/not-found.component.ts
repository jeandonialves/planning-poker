import { isPlatformServer } from '@angular/common';
import {
  Component,
  Inject,
  Optional,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RESPONSE } from '../../server.token';
import { Response } from 'express';


@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  platformId = inject(PLATFORM_ID);

  constructor(@Optional() @Inject(RESPONSE) private response: Response) {
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }
  }
}
