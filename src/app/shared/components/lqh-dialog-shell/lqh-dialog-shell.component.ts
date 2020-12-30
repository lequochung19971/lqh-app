import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/interfaces-abstracts/dialog-data.interface';
import { ComponentBuilderService } from '../../../core/services/component-builder.service';

@Component({
  selector: 'lqh-dialog-shell',
  templateUrl: './lqh-dialog-shell.component.html',
  styleUrls: ['./lqh-dialog-shell.component.scss']
})
export class LqhDialogShellComponent implements OnInit {
  @ViewChild('currentDialog', {read: ViewContainerRef, static: true}) viewContainerRef: ViewContainerRef;

  constructor(
    protected builder: ComponentBuilderService,
    protected dialogRef: MatDialogRef<LqhDialogShellComponent>,
    @Inject(MAT_DIALOG_DATA) protected dialogData: DialogData
  ) { }

  ngOnInit(): void {
    this.builder.renderDynamicComponent(this.dialogData.component, this.viewContainerRef);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
