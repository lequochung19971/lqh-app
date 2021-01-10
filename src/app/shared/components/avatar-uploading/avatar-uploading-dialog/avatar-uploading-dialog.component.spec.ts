import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarUploadingDialogComponent } from './avatar-uploading-dialog.component';

describe('AvatarUploadingDialogComponent', () => {
  let component: AvatarUploadingDialogComponent;
  let fixture: ComponentFixture<AvatarUploadingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarUploadingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarUploadingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
