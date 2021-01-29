import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderToggleComponent } from './gender-toggle.component';

describe('GenderToggleComponent', () => {
  let component: GenderToggleComponent;
  let fixture: ComponentFixture<GenderToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
