import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDoubleClick]',
})
export class DoubleClickDirective {
  constructor() {}
  @HostBinding('disabled') disabled;

  @HostListener('click', ['$event']) clickEvent(event) {
    event.stopPropagation();
    event.preventDefault();
    this.disabled = true;

    setTimeout(() => {
      this.disabled = false;
    }, 350);
  }
}
