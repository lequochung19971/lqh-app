import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleModeThemeComponent } from './toggle-mode-theme.component';

describe('ToggleModeThemeComponent', () => {
  let component: ToggleModeThemeComponent;
  let fixture: ComponentFixture<ToggleModeThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleModeThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleModeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
