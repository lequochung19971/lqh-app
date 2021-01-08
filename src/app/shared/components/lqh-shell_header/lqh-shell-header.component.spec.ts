import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LqhShellHeaderComponent } from './lqh-shell-header.component';

describe('LqhShellHeaderComponent', () => {
  let component: LqhShellHeaderComponent;
  let fixture: ComponentFixture<LqhShellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LqhShellHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LqhShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
