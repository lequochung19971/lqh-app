import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColLayoutComponent } from './col-layout.component';

describe('ColLayoutComponent', () => {
  let component: ColLayoutComponent;
  let fixture: ComponentFixture<ColLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
