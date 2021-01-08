import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOpenDialogComponent } from './input-open-dialog.component';

describe('InputOpenDialogComponent', () => {
  let component: InputOpenDialogComponent;
  let fixture: ComponentFixture<InputOpenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOpenDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOpenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
