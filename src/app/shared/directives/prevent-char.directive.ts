import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[lqhPreventChar]'
})
export class PreventCharDirective {
  regexLetter = /^[a-zA-Z]*$/;
  constructor() {}

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    event.preventDefault();
  }

  @HostListener('keyup', ['$event']) onKeyUp(event) {
    event.preventDefault();
  }

  @HostListener('keyup', ['$event']) onKeyPress(event) {
    event.preventDefault();
  }

}
