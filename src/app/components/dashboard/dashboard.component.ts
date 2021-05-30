import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string = '';
  patientsList: Patient[] = [];
  constructor(
    private _patientService: PatientService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getPatientList();
  }

  getPatientList(): void {
    this._patientService.getPatientList().subscribe(
      (data) => {
        this.patientsList = data;
      },
      (error) => {
        console.error('error caught on getting List');
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }
  getId(id: number) {
    this._route.navigate([`/detail/${id}`]);
  }
}
