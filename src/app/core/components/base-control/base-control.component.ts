import { Input, OnInit, Directive, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl } from '@angular/forms';
import { BindingMode } from '../../enums/binding-mode.enum';
import { BaseModel } from '../../models/base.model';

@Directive()
export abstract class BaseControl implements OnInit, ControlValueAccessor {
  @Input() viewModel: any;
  @Input() parentViewModel: BaseModel;
  @Input() parentFormControl: FormGroup;
  @Input() bindingMode: BindingMode = BindingMode.TWO_WAY;
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

  abstract writeValue(value: any): void;
  
  // bindingToView(params?: any): any {
  //   this.value = params;
  // };
  
  // bindingToModel(params?: any): any {
  //   this.viewModel = params;
  // };  

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
  }

  ngAfterViewInit(): void {
  }

}