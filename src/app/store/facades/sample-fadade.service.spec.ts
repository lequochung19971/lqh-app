import { TestBed } from '@angular/core/testing';

import { SampleFadadeService } from './sample-fadade.service';

describe('SampleFadadeService', () => {
  let service: SampleFadadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleFadadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
