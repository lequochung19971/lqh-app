import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '@core/components/base-control/base-control.component';
import { DialogService } from '../../../services/dialog.service';
import { AvatarUploadingDialogComponent } from '../avatar-uploading-dialog/avatar-uploading-dialog.component';

@Component({
  selector: 'lqh-avatar-uploading-card',
  templateUrl: './avatar-uploading-card.component.html',
  styleUrls: ['./avatar-uploading-card.component.scss']
})
export class AvatarUploadingCardComponent extends BaseControl implements OnInit {
  imagePreviewSrc: string;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected dialogService: DialogService
  ) { 
    super(ngControl);
  }

  hasImage(): boolean {
    return !!(this.imagePreviewSrc || this.value);
  }

  onOpenUploading(): void {
    const dialogConfig = {
      title: 'Provinces',
      component: AvatarUploadingDialogComponent,
      componentInstance: {
      },
      height: '550px',
      width: '850px',
    };
    this.dialogService.openCustomDialog(dialogConfig).afterClosed().subscribe(_data => {
      
    });
  }

  onFileUploaded(event): void {
    const uploadedFile: File = event.target.files[0];
    this.writeValue(uploadedFile);
    this.setPreviewImage(uploadedFile);
  }

  setPreviewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreviewSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  getImage(): string {
    return this.imagePreviewSrc ?? this.value;
  }

}
