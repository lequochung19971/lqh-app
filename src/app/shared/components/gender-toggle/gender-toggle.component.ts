import { Component, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { GenderMetadata } from 'src/app/core/interfaces-abstracts/gender-metadata.interface';
import { Gender } from 'src/app/core/enums/gender.enum';
import { Subscription } from 'rxjs';
import { BaseControl } from '../../../core/components/base-control/base-control.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lqh-gender-toggle',
  templateUrl: './gender-toggle.component.html',
  styleUrls: ['./gender-toggle.component.scss']
})
export class GenderToggleComponent extends BaseControl  {
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
  protected selection;
  
  constructor() { 
    super();
  }

  
  ngOnInit(): void {
    super.ngOnInit();
    this.formControl = new FormControl(Gender.male)
    this.toggleValueChange();
    this.initSelection();
  }

  protected initSelection(): void {
    this.selection = new SelectionModel(false, [this.formControl.value]);
  }

  toggleValueChange(): Subscription {
    return this.formControl.valueChanges.subscribe(val => this.toggleSelection(val));
  }

  isSelected(value: Gender): boolean {
    return this.selection.isSelected(value);
  }

  toggleSelection(value: Gender): void {
    if (!this.isSelected(value)) {
      this.clearAllSelection();
      this.selection.toggle(value);
    }
  }

  clearAllSelection(): void {
    this.selection.clear();
  }
}
