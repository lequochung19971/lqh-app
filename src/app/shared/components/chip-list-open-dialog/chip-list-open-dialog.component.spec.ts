import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipListOpenDialogComponent } from './chip-list-open-dialog.component';

describe('ChipListOpenDialogComponent', () => {
  let component: ChipListOpenDialogComponent;
  let fixture: ComponentFixture<ChipListOpenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipListOpenDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipListOpenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
