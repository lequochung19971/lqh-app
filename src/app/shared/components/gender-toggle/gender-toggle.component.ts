import { Component, Input, Optional, Self } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { NgControl } from '@angular/forms';
import { GenderMetadata } from '@core/interfaces-abstracts/gender-metadata.interface';
import { BaseControl } from '@core/components/base-control/base-control.component';
import { Gender } from '@core/enums/gender.enum';

@Component({
  selector: 'lqh-gender-toggle',
  templateUrl: './gender-toggle.component.html',
  styleUrls: ['./gender-toggle.component.scss'],
})
export class GenderToggleComponent extends BaseControl {
  @Input() metadata: GenderMetadata[] = [
    {
      label: 'Male',
      value: Gender.male
    },
    {
      label: 'Female',
      value: Gender.female
    }
  ];
  selection: SelectionModel<Gender>;

  constructor(@Optional() @Self() public ngControl: NgControl) { 
    super(ngControl);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  writeValue(val: Gender): void {
    if (!this.selection) {
      this.initSelection(val as Gender);
    }

    this.onTouched();
    this.onChanged(val);
  }

  protected initSelection(val: Gender) {
    this.selection = new SelectionModel(false, [val]);
  }

  isSelected(value: Gender): boolean {
    return this.selection.isSelected(value);
  }

  toggleSelection(value: Gender): void {
    if (!this.isSelected(value)) {
      this.clearAllSelection();
      this.selection.toggle(value);

      this.writeValue(value);
    }
  }

  clearAllSelection(): void {
    this.selection.clear();
  }
}
