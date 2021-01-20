import { Component, OnInit, Self, Optional, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '@core/components/base-control/base-control.component';

@Component({
  selector: 'lqh-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseControl implements OnInit {
  @Input() required: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() readonly: boolean = false;

  constructor(@Optional() @Self() public ngControl: NgControl) { 
    super(ngControl);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  writeValue(value?: any): void {
    this.value = value;
    this.onTouched();
    this.onChanged(value);
  }

  inputChange({value}: {value: any}) {
    this.writeValue(value);
  }

}
