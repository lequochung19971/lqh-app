import { TestBed } from '@angular/core/testing';

import { ModeThemeFacadeService } from './mode-theme-facade.service';

describe('ModeThemeFacadeService', () => {
  let service: ModeThemeFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeThemeFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
