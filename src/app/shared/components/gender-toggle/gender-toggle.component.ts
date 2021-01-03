import { Component, Input, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { GenderMetadata } from 'src/app/core/interfaces-abstracts/gender-metadata.interface';
import { Gender } from 'src/app/core/enums/gender.enum';
import { Subscription } from 'rxjs';
import { BaseControl } from '../../../core/components/base-control/base-control.component';

@Component({
  selector: 'lqh-gender-toggle',
  templateUrl: './gender-toggle.component.html',
  styleUrls: ['./gender-toggle.component.scss']
})
export class GenderToggleComponent extends BaseControl implements OnInit {
  @Input() formControl: FormControl = new FormControl(Gender.male);
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
  protected selection = new SelectionModel(false, [this.formControl.value]);
  
  constructor() { 
    super();
  }

  
  ngOnInit(): void {
    this.toggleValueChange();
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
