import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { from, map, mergeMap, Observable, throwError } from 'rxjs';
import { inject, Injectable, signal } from '@angular/core';
import { AuthResponse } from '@supabase/supabase-js';
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

  register(email: string, password: string, full_name: string): Observable<AuthResponse> {
    const promise = this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name,
        },
      },
    });
    return from(promise);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const promise = this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    return from(promise);
  }

  resetPassword(email: string) {
    const promise = this.supabase.auth.resetPasswordForEmail(email);

    return from(promise);
  }

  updatePassword(password: string) {
    const promise = this.supabase.auth.updateUser({ password });

    return from(promise);
  }
}
