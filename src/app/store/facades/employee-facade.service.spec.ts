import { TestBed } from '@angular/core/testing';

import { EmployeeFacadeService } from './employee-facade.service';

describe('EmployeeFacadeService', () => {
  let service: EmployeeFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
