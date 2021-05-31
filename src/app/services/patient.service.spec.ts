import { TestBed } from '@angular/core/testing';

import { PatientService } from '../services/patient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: PatientService = TestBed.get(PatientService);
    expect(service).toBeTruthy();
  });
});
