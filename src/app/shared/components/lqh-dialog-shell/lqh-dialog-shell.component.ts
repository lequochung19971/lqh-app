import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig } from 'src/app/core/interfaces-abstracts/dialog-config.interface';
import { ComponentBuilderService } from '../../../core/services/component-builder.service';

@Component({
  selector: 'lqh-dialog-shell',
  templateUrl: './lqh-dialog-shell.component.html',
  styleUrls: ['./lqh-dialog-shell.component.scss']
})
export class LqhDialogShellComponent implements OnInit {
  @ViewChild('currentDialog', {read: ViewContainerRef, static: true}) viewContainerRef: ViewContainerRef;
  title: string;
  rightSide: boolean;

  constructor(
    protected builder: ComponentBuilderService,
    protected dialogRef: MatDialogRef<LqhDialogShellComponent>,
    @Inject(MAT_DIALOG_DATA) protected dialogConfig: DialogConfig
  ) { }

  ngOnInit(): void {
    this.title = this.dialogConfig.title;
    this.rightSide = this.dialogConfig.rightSide;
    this.builder.renderDynamicComponent(this.dialogConfig.component, this.viewContainerRef);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
