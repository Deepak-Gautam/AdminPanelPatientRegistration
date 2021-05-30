import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Patient } from "../../models/patient";
import { Router, ActivatedRoute } from "@angular/router";
import { PatientService } from "../../services/patient.service";
import { ToastrService } from "ngx-toastr";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-new-registration",
  templateUrl: "./new-registration.component.html",
  styleUrls: ["./new-registration.component.scss"],
})
export class NewRegistrationComponent implements OnInit {
  patient: Patient[] = [];
  firstName: string = "";
  lastName: string = "";
  address: string = "";
  appointmentDate: string = "";
  assignedTo: string = "";
  reason: string = "";
  caseDescription: string = "";
  form!: FormGroup; // variable is not null or undefined
  submitted: boolean = false;
  id: number = Math.random();
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _patientService: PatientService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ["", Validators.required],
      lastName: [],
      address: ["", Validators.required],
      appointmentDate: ["", Validators.required],
      assignedTo: ["", Validators.required],
      reason: [],
      caseDescription: [],
    });
  }
  get f() {
    return this.form.controls;
  }
  onBtnCLick(): void {
    this.submitted = true;
    const data = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      appointmentDate: this.appointmentDate,
      assignedTo: this.assignedTo,
      reason: this.reason,
      caseDescription: this.caseDescription,
    };
    if (this.form.invalid) {
      return;
    } else {
      this._patientService.newRegistration(data).subscribe((a) => {
        this.patient.push(a);
      });
      this._router.navigate(["/dashboard"]);
    }
  }
}
