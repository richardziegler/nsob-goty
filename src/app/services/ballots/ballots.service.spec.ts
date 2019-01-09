import { TestBed, inject } from '@angular/core/testing';

import { BallotsService } from './ballots.service';

describe('SubmissionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BallotsService]
    });
  });

  it('should be created', inject([BallotsService], (service: BallotsService) => {
    expect(service).toBeTruthy();
  }));
});
