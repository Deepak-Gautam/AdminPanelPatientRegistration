import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DoctorsService } from './doctors.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('DoctorsService HttpClient Testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: DoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(DoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
