import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LqhDialogShellCustomComponent } from './lqh-dialog-shell-custom.component';

describe('LqhDialogShellCustomComponent', () => {
  let component: LqhDialogShellCustomComponent;
  let fixture: ComponentFixture<LqhDialogShellCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LqhDialogShellCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LqhDialogShellCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
