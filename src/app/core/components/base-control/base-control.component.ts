import { Input, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export abstract class BaseControl implements OnInit {
  @Input() abstract formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  patchControlValue(value: any) {
    this.formControl.patchValue(value);
  }
}
