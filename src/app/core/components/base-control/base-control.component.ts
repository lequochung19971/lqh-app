import { Input, OnInit, Directive, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl } from '@angular/forms';
import { BaseModel } from '../../models/base.model';
import * as _ from 'lodash-es';
@Directive()
export abstract class BaseControl implements OnInit, ControlValueAccessor {
  @Input() viewModel: any;
  @Input() parentViewModel: BaseModel;
  @Input() parentFormControl: FormGroup;
  @Input() path: string;
  @Input() viewToModelFn: (params?: any) => any;
  @Input() modelToViewFn: (params?: any) => any;
  formControl: FormControl;
  disabled: boolean;
  value: any;
  private onChanged: any = () => {};
  private onTouched: any = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) { 
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.formControl = this.ngControl ? this.ngControl.control as FormControl : new FormControl();
  }
  
  get pathName(): string {
    return this.path || this.ngControl.name as string;
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
      const result = this.modelToViewFn(value);
      this.updateView(result);
    } else {
      this.updateView(value);
    }
  }
  
  bindViewToModel(value?: any): any {
    if (this.viewToModelFn) {
      const result = this.viewToModelFn(value);
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

  protected updateModel(value: any): void {
    this.setBindingModel(this.viewModel, this.pathName, value);
  }

  protected updateView(value: any): void {
    this.value = value;
    this.onTouched();
    this.onChanged(value);
  }

  protected setBindingModel(modelData: any, path: string | null, value: any): void {
    _.set(modelData, path, value);
  }
}
