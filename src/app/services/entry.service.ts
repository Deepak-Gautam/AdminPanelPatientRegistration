import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  isLoggedIn = false;
  entry(code: string) {
    if (code === 'sitecore123') {
      this.isLoggedIn = true;
      return true;

    } else {
      return false;
    }
  }
}
