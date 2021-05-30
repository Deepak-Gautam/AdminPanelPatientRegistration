import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrycode } from '../models/entrycode';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  isLoggedIn: boolean = false;
  constructor(
    private http: HttpClient,
    private _errorhandling: ErrorHandlingService
  ) {}
  private apiUrl = 'api/users';

  entry(): Observable<Entrycode[]> {
    return this.http
      .get<Entrycode[]>(this.apiUrl)
      .pipe(
        catchError(
          this._errorhandling.handleError<Entrycode[]>('getEntryCode', [])
        )
      );
  }
}
