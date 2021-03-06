import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntryService } from './entry.service';

describe('EntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EntryService],
    });
  });

  it('should be created', () => {
    const service: EntryService = TestBed.inject(EntryService);
    expect(service).toBeTruthy();
  });
});
