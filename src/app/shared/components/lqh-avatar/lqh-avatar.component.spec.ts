import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LqhAvatarComponent } from './lqh-avatar.component';

describe('LqhAvatarComponent', () => {
  let component: LqhAvatarComponent;
  let fixture: ComponentFixture<LqhAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LqhAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LqhAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
