import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { AddressModel } from '@core/models/address.model';
import { DialogService } from '@shared/services/dialog.service';
import { InputComponent } from '../input/input.component';
import { AddressDialogComponent } from '@shared/components/address/address-dialog.component';
import { ControlOpenDialog } from '@core/interfaces-abstracts/control-open-dialog.interface';

@Component({
  selector: 'lqh-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss']
})
export class AddressInputComponent extends InputComponent implements OnInit, ControlOpenDialog {
  value: string = '';
  dialogConfig: DialogConfig;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected dialogService: DialogService
  ) { 
    super(ngControl);
  }

  writeValue(address: AddressModel): void {
    this.value = address?.ward?.pathWithType || ''
    
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
