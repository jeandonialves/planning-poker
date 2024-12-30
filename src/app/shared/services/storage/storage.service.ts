import { Injectable } from '@angular/core';
import { AppComponent } from '../../../app.component';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length = 0
  clear(): void {}
  key(index: number): string | null {return null;}
  getItem(key: string): string | null {return null;}
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}


@Injectable({
  providedIn: 'root',
})
export class StorageService implements Storage {

  private storage: Storage;

  constructor() {
    this.storage = new LocalStorage();

    AppComponent.isBrowser.subscribe(isBrowser => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
  }

  [name: string]: any;

  length = 0;

  key(index: number): string | null {
    return this.storage.key(index);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return  this.storage.getItem(key);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
