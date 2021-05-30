import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  patients$!: Observable<Patient[]>;
  searchTerms = new Subject<string>();
  constructor(private _patientService: PatientService) {}

  search(value: string): void {
    this.searchTerms.next(value);
  }
  ngOnInit(): void {
    this.patients$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value: string) => this._patientService.searchPatient(value))
    );
  }
}
