import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarUploadingCardComponent } from './avatar-uploading-card.component';

describe('AvatarUploadingCardComponent', () => {
  let component: AvatarUploadingCardComponent;
  let fixture: ComponentFixture<AvatarUploadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarUploadingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarUploadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
