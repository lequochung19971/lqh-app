import { Input, OnInit, Directive, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl } from '@angular/forms';
import { BaseModel } from '../../models/base.model';

@Directive()
export abstract class BaseControl implements OnInit, ControlValueAccessor {
  @Input() viewModel: any;
  @Input() parentViewModel: BaseModel;
  @Input() parentFormControl: FormGroup;
  @Input() viewToModelFn: (params?: any) => any;
  @Input() modelToViewFn: (params?: any) => any;
  formControl: FormControl;
  disabled: boolean;
  value: any;
  private _pathName: string | number | null;
  private onChanged: any = () => {};
  private onTouched: any = () => {};



  constructor(@Optional() @Self() public ngControl: NgControl) { 
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  
  get pathName(): string | null | number {
    return this._pathName || this.ngControl.name;
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

  private updateModel(value: any): void {
    this.viewModel[this.pathName] = value;
  }

  private updateView(value: any): void {
    this.value = value;
    this.onTouched();
    this.onChanged(value);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this.formControl = this.ngControl ? this.ngControl.control as FormControl : new FormControl();
    this._pathName = this.ngControl ? this.ngControl.name : '';
  }
}
