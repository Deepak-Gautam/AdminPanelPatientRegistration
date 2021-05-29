import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {Patient} from "../models/patient";

@Injectable({
  providedIn: "root"
})
export class PatientService {
  private apiUrl = "api/patients";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }

  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
}
