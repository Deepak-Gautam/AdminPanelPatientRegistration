import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  entry(code: string) {
    console.log('fsdfsdf');
    if (code === 'sitecore123') {
      return true;
    } else {
      return false;
    }
  }
}
