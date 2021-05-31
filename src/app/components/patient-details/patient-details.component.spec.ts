import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatientDetailsComponent } from './patient-details.component';

describe('PatientDetailsComponent', () => {
  let component: PatientDetailsComponent;
  let fixture: ComponentFixture<PatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
