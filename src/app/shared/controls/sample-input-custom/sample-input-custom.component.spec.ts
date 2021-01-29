import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleInputCustomComponent } from './sample-input-custom.component';

describe('SampleInputCustomComponent', () => {
  let component: SampleInputCustomComponent;
  let fixture: ComponentFixture<SampleInputCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleInputCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleInputCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
