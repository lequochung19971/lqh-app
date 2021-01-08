import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LqhShellLeftSideComponent } from './lqh-shell-left-side.component';

describe('LqhShellLeftSideComponent', () => {
  let component: LqhShellLeftSideComponent;
  let fixture: ComponentFixture<LqhShellLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LqhShellLeftSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LqhShellLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
