import { TestBed } from '@angular/core/testing';

import { LocatorFacadeService } from './locator-facade.service';

describe('LocatorFacadeService', () => {
  let service: LocatorFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocatorFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
