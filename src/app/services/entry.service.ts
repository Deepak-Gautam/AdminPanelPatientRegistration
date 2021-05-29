import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrycode } from '../models/entrycode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  isLoggedIn = false;
  constructor(private http: HttpClient) {}
  private apiUrl = 'api/users';

  entry():Observable<Entrycode[]> {
    return this.http.get<Entrycode[]>(this.apiUrl);
  }
}
