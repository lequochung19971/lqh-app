import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LqhDialogShellComponent } from './lqh-dialog-shell.component';

describe('LqhDialogShellComponent', () => {
  let component: LqhDialogShellComponent;
  let fixture: ComponentFixture<LqhDialogShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LqhDialogShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LqhDialogShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
