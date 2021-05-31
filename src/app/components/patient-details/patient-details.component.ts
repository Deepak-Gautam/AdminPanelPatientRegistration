import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient | undefined;
  constructor(
    private _patientService: PatientService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getPatientById();
  }
  getPatientById(): void {
    const id = parseInt(this._route.snapshot.paramMap.get('id')!, 10);
    this._patientService
      .getPatientById(id)
      .subscribe((patient) => (this.patient = patient));
    console.log(this.patient);
  }
  goBack() {
    this._location.back();
  }
}
