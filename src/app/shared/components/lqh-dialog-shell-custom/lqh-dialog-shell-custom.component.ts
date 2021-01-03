import { Component, Inject, OnInit } from '@angular/core';
import { LqhDialogShellComponent } from '../lqh-dialog-shell/lqh-dialog-shell.component';
import { ComponentBuilderService } from '../../../core/services/component-builder.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig } from '../../../core/interfaces-abstracts/dialog-config.interface';

@Component({
  selector: 'lqh-dialog-shell-custom',
  templateUrl: './lqh-dialog-shell-custom.component.html',
  styleUrls: ['./lqh-dialog-shell-custom.component.scss']
})
export class LqhDialogShellCustomComponent extends LqhDialogShellComponent implements OnInit {
  height: string;
  constructor(
    protected builder: ComponentBuilderService,
    protected dialogRef: MatDialogRef<LqhDialogShellComponent>,
    @Inject(MAT_DIALOG_DATA) protected dialogConfig: DialogConfig
  ) {
    super(builder, dialogRef, dialogConfig);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.calculateHeightOfMainContent();
  }

  calculateHeightOfMainContent() {
    const dialogs = document.querySelectorAll('.lqh-dialog-shell-custom') as NodeList
    const currentDialog: HTMLElement | null = dialogs ? dialogs[dialogs.length - 1] as HTMLElement: null;
    const header = currentDialog.querySelector('.lqh-dialog-shell-custom__header');
    const main: HTMLElement = currentDialog.querySelector('.lqh-dialog-shell-custom__main');
    const dialogHight = currentDialog.clientHeight;
    const headerHeight = header.clientHeight;
    main.style.height = `${dialogHight - headerHeight}px` 
  }

}
