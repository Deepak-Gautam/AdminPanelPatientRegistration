import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private apiUrl = 'api/doctors';
  constructor(
    private _http: HttpClient,
    private _errorhandling: ErrorHandlingService
  ) {}

  getDoctors(): Observable<Doctor[]> {
    return this._http
      .get<Doctor[]>(this.apiUrl)
      .pipe(
        catchError(this._errorhandling.handleError<Doctor[]>('getdoctors', []))
      );
  }
}
