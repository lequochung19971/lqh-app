import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '../../../core/components/base-control/base-control.component';
import { ControlOpenDialog } from '../../../core/interfaces-abstracts/control-open-dialog.interface';
import { DialogConfig } from '../../../core/interfaces-abstracts/dialog-config.interface';
import { AddressModel } from '../../../core/models/address.model';
import { DialogService } from '../../services/dialog.service';
import { AddressDialogComponent } from '../address/address-dialog.component';

@Component({
  selector: 'lqh-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss']
})
export class AddressInputComponent extends BaseControl implements OnInit, ControlOpenDialog {
  @Input() label: string = '';
  @Input() placeholder: string;
  value: string = '';
  dialogConfig: DialogConfig;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected dialogService: DialogService
  ) { 
    super(ngControl);
  }
  
  ngOnInit(): void {
    super.ngOnInit();
  }

  writeValue(address: AddressModel): void {
    this.bindingToView(address?.ward?.pathWithType || '')

    this.bindingToModel(address);
    
    this.onTouched();
    this.onChanged(address);
  }

  openDialog(): void {
    this.dialogConfig = {
      title: 'PROVINCE_ADDRESS_DIALOG_TITLE',
      component: AddressDialogComponent,
      componentInstance: {
        isFullAddressMode: true,
        viewModel: this.viewModel
      },
      height: '550px',
      width: '850px'
    }
    this.dialogService.openCustomDialog(this.dialogConfig).afterClosed().subscribe((data: AddressModel) => {
      if (data) {
        this.handleAfterDialogClose(data);
      }
    })  
  }

  handleAfterDialogClose(data: AddressModel) {
    this.writeValue(data);
  }
}
