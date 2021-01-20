import { TestBed } from '@angular/core/testing';

import { EmployeeRestService } from './employee-rest.service';

describe('EmployeeRestService', () => {
  let service: EmployeeRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
