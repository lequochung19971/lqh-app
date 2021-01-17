import { Directive, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogRefType } from '@core/interfaces-abstracts/dialog-config.interface';
import { DialogMetadataBuilderConfig } from '../../interfaces-abstracts/builder-config.interface';

@Directive()
export abstract class BaseDialogComponent implements OnInit {
  @Input() currentDialogRef: MatDialogRef<DialogRefType>;
  metadata: DialogMetadataBuilderConfig;

  constructor() { 
  }

  ngOnInit(): void {
    this.onLoadDialogMetadata();
  }

  onLoadDialogMetadata() {
    this.metadata = {
      currentDialogRef: this.currentDialogRef
    }
  }

}
