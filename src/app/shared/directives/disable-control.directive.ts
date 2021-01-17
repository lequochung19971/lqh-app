import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[lqhDisableControl]',
})
export class DisableControlDirective {
  constructor(protected ngControl: NgControl) {}

  @Input('lqhDisableControl') set disabledControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    if (this.ngControl.control) {
      this.ngControl.control[action]();
    }
  }
}
