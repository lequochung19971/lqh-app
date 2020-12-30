import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LqhShellDialogComponent } from './lqh-shell-dialog.component';

describe('LqhShellDialogComponent', () => {
  let component: LqhShellDialogComponent;
  let fixture: ComponentFixture<LqhShellDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LqhShellDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LqhShellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
