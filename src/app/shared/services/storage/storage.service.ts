import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { isPlatformBrowser } from '@angular/common';
import { LOCAL_STORAGE } from '../../../tokens';

// class LocalStorage implements Storage {
//   [name: string]: any;
//   readonly length = 0;
//   clear(): void {}
//   key(index: number): string | null {
//     return null;
//   }
//   getItem(key: string): string | null {
//     return null;
//   }
//   removeItem(key: string): void {}
//   setItem(key: string, value: string): void {}
// }

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage = inject(LOCAL_STORAGE);

  key(index: number): string | null {
    return this.storage.key(index);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
