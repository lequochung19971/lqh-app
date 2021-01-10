import { Input, OnInit, Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive()
export abstract class BaseControl implements OnInit {
  @Input() formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  initFormControl() {
  }

  patchControlValue(value: any) {
    this.formControl.patchValue(value);
  }
}
