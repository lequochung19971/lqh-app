import { Component, Input, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { GenderMetadata } from 'src/app/core/interfaces-abstracts/gender-metadata.interface';
import { Gender } from 'src/app/core/enums/gender.enum';

@Component({
  selector: 'lqh-gender-toggle',
  templateUrl: './gender-toggle.component.html',
  styleUrls: ['./gender-toggle.component.scss']
})
export class GenderToggleComponent implements OnInit {
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
  control: FormControl = new FormControl(Gender.male);
  protected selection = new SelectionModel(false, []);
  
  constructor() { }

  
  ngOnInit(): void {
    this.setDefaultValue();
    this.toggleValueChange();
  }

  toggleValueChange() {
    return this.control.valueChanges.subscribe((value: Gender) => this.toggleSelection(value));
  }

  setDefaultValue() {
    this.toggleSelection(this.control.value);
  }
  
  isSelected(value: Gender) {
    return this.selection.isSelected(value);
  }

  toggleSelection(value: Gender) {
    if (!this.isSelected(value)) {
      this.clearAllSelection();
      this.selection.toggle(value);
    }
  }

  clearAllSelection() {
    this.selection.clear();
  }
}
