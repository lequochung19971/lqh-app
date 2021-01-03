import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipListPopupComponent } from './chip-list-popup.component';

describe('ChipListPopupComponent', () => {
  let component: ChipListPopupComponent;
  let fixture: ComponentFixture<ChipListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipListPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
