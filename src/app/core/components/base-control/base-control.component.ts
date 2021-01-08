import { Input, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export abstract class BaseControl implements OnInit {
  @Input() formControl: FormControl;
  abstract initialFormControlValue: any;

  constructor() { }

  ngOnInit(): void {
    this.initFormControl();
  }

  initFormControl() {
    this.formControl = new FormControl(this.initialFormControlValue);
  }

  patchControlValue(value: any) {
    this.formControl.patchValue(value);
  }
}
