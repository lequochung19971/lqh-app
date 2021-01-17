import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';
import { AvatarUploadingDialogComponent } from '../avatar-uploading-dialog/avatar-uploading-dialog.component';

@Component({
  selector: 'lqh-avatar-uploading-card',
  templateUrl: './avatar-uploading-card.component.html',
  styleUrls: ['./avatar-uploading-card.component.scss']
})
export class AvatarUploadingCardComponent implements OnInit {

  constructor(
    protected dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  hasImage(): boolean {
    return false;
  }

  onOpenUploading(): void {
    const dialogConfig = {
      title: 'Provinces',
      component: AvatarUploadingDialogComponent,
      componentInstance: {
      },
      height: '550px',
      width: '850px',
    }
    this.dialogService.openCustomDialog(dialogConfig).afterClosed().subscribe(_data => {
      
    })
  }

}
