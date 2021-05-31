import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Patient } from "../models/patient";
import { Doctor } from "../models/doctor";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients: Object = [
      {
        id: 11,
        firstName: "Robin Parsad",
        lastName: " Gautam",
        address: "Lysalleen 526 Trekroner",
        appointmentDate: "2021-05-12",
        assignedTo: "Dr.Ram Krishna",
        reason: "Headache & Fever",
        caseDescription:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },
      {
        id: 12,
        firstName: "Anina",
        lastName: " Mahat",
        address: "Roskilde",
        appointmentDate: "2021-05-12",
        assignedTo: "Dr.Ram Krishna",
        reason: "Headache & Fever",
        caseDescription:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },
      {
        id: 13,
        firstName: "Deepak",
        lastName: " Gautam",
        address: "Lysalleen 526 Trekroner",
        appointmentDate: "2021-05-12",
        assignedTo: "Dr.Ram Krishna",
        reason: "Headache & Fever",
        caseDescription:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },
    ];
    const users: Object = [{ id: 1 + Math.random(), code: "sitecore123" }];
    const doctors: Object = [
      { id: 1, name: "Dr. Ram Krishna" },
      { id: 2, name: "Dr Baburam" },
      { id: 3, name: "Jone Hansen" },
      { id: 3, name: "Dr Mathis Gustav" },
    ];

    return { patients, users, doctors };
  }
  genId(patients: Patient[]): number {
    return patients.length > 0
      ? Math.max(...patients.map((m) => m.id)) + 1
      : 11;
  }
}
