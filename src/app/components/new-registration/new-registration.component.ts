import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../../models/patient';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorsService } from '../../services/doctors.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss'],
})
export class NewRegistrationComponent implements OnInit {
  patient = new Patient();
  patients: Patient[] = [];
  doctor: any = [];
  form!: FormGroup; // variable is not null or undefined
  submitted: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;
  id: number = Math.trunc(Math.random() * 20) + 1;
  title!: string;
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _patientService: PatientService,
    private _toastr: ToastrService,
    private _doctorsService: DoctorsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [],
      address: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      assignedTo: ['', Validators.required],
      reason: [],
      caseDescription: [],
    });
    this.getDoctors();
  }

  get field() {
    return this.form.controls;
  }
  getDoctors(): void {
    of(
      this._doctorsService.getDoctors().subscribe(
        (data) => {
          console.log(data);
          this.doctor = data;
        },
        (error) => {
          console.error('error caught on getting List');
          this.errorMessage = error;
          this.isLoading = false;
        }
      )
    );
  }
  onBtnCLick(): void {
    this.submitted = true;
    const data = {
      id: this.id,
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      address: this.patient.address,
      appointmentDate: this.patient.appointmentDate,
      assignedTo: this.patient.assignedTo,
      reason: this.patient.reason,
      caseDescription: this.patient.caseDescription,
    };
    console.log(this.patient);
    if (this.form.invalid) {
      return;
    } else {
      this._patientService.newRegistration(data).subscribe((a) => {
        this.patients.push(a);
        this._toastr.success('You have Successfully registered new patient');
      });
      this._router.navigate(['/dashboard']);
    }
  }
  onChange(newValue: string) {
    console.log(newValue);
    this.patient.assignedTo = newValue;
  }
}
