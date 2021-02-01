import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disabledControl]',
})
export class DisabledControlDirective {
  constructor(protected ngControl: NgControl) {}

  @Input('disabledControl') set disabledControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    if (this.ngControl.control) {
      this.ngControl.control[action]();
    }
  }
}
