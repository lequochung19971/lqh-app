import { TestBed } from '@angular/core/testing';

import { JsonObjectService } from './json-object.service';

describe('JsonObjectService', () => {
  let service: JsonObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
