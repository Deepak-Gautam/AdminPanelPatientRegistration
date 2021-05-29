import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients: Object = [
      {
        patientNo: 11,
        firstName: 'Deepak',
        lastName: ' Gautam',
        address: 'Roskilde',
        appointmentDate: '2021-05-12',
        assignedTo: 'Dr.Ram Krishna',
        caseDescription:
          'Mr. deepak is suffering from high fever and headache. He also have some symptioms of Covid--19',
      },
      {
        patientNo: 12,
        firstName: 'Anina',
        lastName: ' Mahat',
        address: 'Roskilde',
        appointmentDate: '2021-05-12',
        assignedTo: 'Dr.Ram Krishna',
        caseDescription:
          'Mr. deepak is suffering from high fever and headache. He also have some symptioms of Covid--19',
      },
    ];
    const users: Object = [{ id: 1 + Math.random(), code: 'sitecore123' }];
    return { patients, users };
  }
  genId(patients: Patient[]): number {
    return patients.length > 0
      ? Math.max(...patients.map((m) => m.patientNo)) + 1
      : 11;
  }
}
