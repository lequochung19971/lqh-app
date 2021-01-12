import { Component, Input, Optional, Self } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { GenderMetadata } from 'src/app/core/interfaces-abstracts/gender-metadata.interface';
import { Gender } from 'src/app/core/enums/gender.enum';
import { BaseControl } from 'src/app/core/components/base-control/base-control.component';
import { NgControl } from '@angular/forms';

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
    this.value = val;
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
