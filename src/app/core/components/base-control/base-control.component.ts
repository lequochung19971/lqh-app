import { Input, OnInit, Directive, Optional, Self, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl } from '@angular/forms';
import { BaseModel } from '../../models/base.model';
import { set } from 'lodash';

export type BindingViewModelFn = ({
  accessor,
  value,
}: {
  accessor?: BaseControl;
  value?: any;
}) => any;
@Directive()
export abstract class BaseControl implements OnInit, ControlValueAccessor, AfterViewInit {
  @Input() viewModel: any;
  @Input() parentViewModel: BaseModel;
  @Input() parentFormControl: FormGroup;
  @Input() path: string;
  @Input() viewToModelFn: ({ accessor, value }: { accessor?: BaseControl; value?: any }) => any;
  @Input() modelToViewFn: ({ accessor, value }: { accessor?: BaseControl; value?: any }) => any;
  @Input() disabledControl: boolean;
  formControl: FormControl;
  disabled: boolean;
  value: any;
  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.formControl = this.ngControl ? (this.ngControl.control as FormControl) : new FormControl();
  }

  ngAfterViewInit(): void {}

  get pathName(): string {
    return this.path || (this.ngControl.name as string);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.bindModelToView(value);
    this.bindViewToModel(value);
  }

  bindTwoWay(value?: any): void {
    this.updateModel(value);
    this.updateView(value);
  }

  bindModelToView(value?: any): any {
    if (this.modelToViewFn) {
      const result = this.modelToViewFn({ accessor: this, value });
      this.updateView(result);
    } else {
      this.updateView(value);
    }
  }

  bindViewToModel(value?: any): any {
    if (this.viewToModelFn) {
      const result = this.viewToModelFn({ accessor: this, value });
      this.updateModel(result);
    } else {
      this.updateModel(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateModel(value: any): void {
    this.setBindingData(this.viewModel, this.pathName, value);
  }

  updateView(value: any): void {
    this.value = value;
    this.onTouched();
    this.onChanged(value);
  }

  setBindingData(modelData: any, path: string | null, value: any): void {
    set(modelData, path, value);
  }
}
