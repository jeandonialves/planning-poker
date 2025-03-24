import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { iUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase = injectSupabase();
  private router = inject(Router);

  currentUser = signal<iUser | null>(null);
  isLoggedIn = signal<boolean>(false);

  async load() {
    const { data } = await this.supabase.auth.getSession();

    if (!data.session) {
      return;
    }

    this.currentUser.set(data.session?.user as unknown as iUser);
    this.isLoggedIn.set(true);
  }
}
