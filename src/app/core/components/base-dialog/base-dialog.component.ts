import { Directive, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogRefType } from '@core/interfaces-abstracts/dialog-config.interface';
import { DialogMetadataBuilderConfig } from '../../interfaces-abstracts/builder-config.interface';
import { BaseComponent } from '../base-component/base.component';

@Directive()
export abstract class BaseDialogComponent extends BaseComponent implements OnInit {
  @Input() currentDialogRef: MatDialogRef<DialogRefType>;
  metadata: DialogMetadataBuilderConfig;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.onLoadDialogMetadata();
  }

  onLoadDialogMetadata(): void {
    this.metadata = {
      currentDialogRef: this.currentDialogRef
    };
  }

}
