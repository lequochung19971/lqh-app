import { Component, OnInit, Self, Optional, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '@core/components/base-control/base-control.component';

@Component({
  selector: 'lqh-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseControl implements OnInit {
  @Input() required = false;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() readonly = false;

  constructor(@Optional() @Self() public ngControl: NgControl) { 
    super(ngControl);
  }

  inputChange({ value }: { value: string }): void {
    this.writeValue(value);
  }

}
