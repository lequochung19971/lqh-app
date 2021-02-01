import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DialogConfig } from '@core/interfaces-abstracts/dialog-config.interface';
import { AddressModel } from '@core/models/address.model';
import { DialogService } from '@shared/services/dialog.service';
import { AddressDialogComponent } from '@shared/components/address/address-dialog.component';
import { ControlOpenDialog } from '@core/interfaces-abstracts/control-open-dialog.interface';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'lqh-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss']
})
export class AddressInputComponent extends InputComponent implements OnInit, ControlOpenDialog {
  dialogConfig: DialogConfig;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected dialogService: DialogService
  ) { 
    super(ngControl);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.value) {
      this.writeValue(this.value);
    }
  }

  writeValue(value: any): void {
    this.bindModelToView(value);
    this.bindViewToModel(value);
  }

  bindViewToModel(address: AddressModel | string): void {
    if (typeof address === 'object') {
      this.viewModel[this.pathName] = address;
    }
  }

  bindModelToView(address: AddressModel | string): void {
    if (typeof address === 'object') {
      this.updateView(address?.ward?.pathWithType ?? '');
    } else {
      this.updateView(address);
    }
  }

  openDialog(): void {
    this.dialogConfig = {
      title: 'PROVINCE_ADDRESS_DIALOG_TITLE',
      component: AddressDialogComponent,
      componentInstance: {
        isFullAddressMode: true,
        viewModel: this.viewModel[this.pathName]
      },
      height: '550px',
      width: '850px'
    };

    this.dialogService.openCustomDialog(this.dialogConfig).afterClosed().subscribe((data: AddressModel) => {
      if (data) {
        this.handleAfterDialogClose(data);
      }
    });
  }

  handleAfterDialogClose(data: AddressModel): void {
    this.writeValue(data);
  }
}
