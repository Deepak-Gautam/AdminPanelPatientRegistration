import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrycode } from '../models/entrycode';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  isLoggedIn = false;
  constructor(private http: HttpClient) {}
  private apiUrl = 'api/users';

  entry():Observable<Entrycode[]> {
    return this.http.get<Entrycode[]>(this.apiUrl).pipe(
      catchError((err)=>{
        console.log("error found in entry service")
        console.log(err);
        return throwError(err);
      })
    );
  }
}
