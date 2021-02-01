import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lqhInputNumber]',
})
export class InputNumberDirective {
  regexNumber = /^[0-9]*$/;
  constructor() {}

  @Input('lqhInputNumber') inputNumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event): void {
    const e = event as KeyboardEvent;
    if (this.checkAllowKeyCode(e)) {
      return;
    }
    this.checkNumberInput(e);
  }

  checkNumberInput(event): void {
    const character = String.fromCharCode(event.keyCode);
    if (this.regexNumber.test(character)) {
      return;
    } else {
      event.preventDefault();
    }
  }

  checkAllowKeyCode(event): boolean {
    if (
      [46, 8, 9].indexOf(event.keyCode) !== -1 ||
      // Allow: Ctrl + A
      (event.keyCode === 65 && event.ctrlKey === true) ||
      // Allow: Ctrl + C
      (event.keyCode === 67 && event.ctrlKey === true) ||
      // Allow: Ctrl + V
      (event.keyCode === 86 && event.ctrlKey === true) ||
      // Allow: Ctrl + X
      (event.keyCode === 88 && event.ctrlKey === true) ||
      // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      return true;
    }

    return false;
  }
}
