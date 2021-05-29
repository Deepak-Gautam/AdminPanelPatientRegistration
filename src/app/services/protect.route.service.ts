import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EntryService } from './entry.service';

@Injectable({
  providedIn: 'root',
})
export class ProtectRoute implements CanActivate {
  constructor(private _entryService: EntryService, private _router: Router) {}
  canActivate() {
    if (this._entryService.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
