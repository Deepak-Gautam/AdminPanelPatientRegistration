import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Patient } from '../models/patient';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = 'api/patients';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private _http: HttpClient,
    private _errorhandling: ErrorHandlingService
  ) {}

  getPatientList(): Observable<Patient[]> {
    return this._http
      .get<Patient[]>(this.apiUrl)
      .pipe(
        catchError(this._errorhandling.handleError<Patient[]>('getPatient', []))
      );
  }
  searchPatient(value: string): Observable<Patient[]> {
    if (!value.trim) {
      return of([]);
    } else {
      return this._http
        .get<Patient[]>(`${this.apiUrl}/?firstName=${value}`)
        .pipe(
          catchError(
            this._errorhandling.handleError<Patient[]>('searchPatient', [])
          )
        );
    }
  }
}
