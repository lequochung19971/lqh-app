import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseModel } from '@core/models/base.model';
import * as _ from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFormService<TModel extends BaseModel> {
  private _form: FormGroup;
  private _originalFormValue: TModel; 

  constructor(
    protected formBuilder: FormBuilder,
    initialForm: FormGroup,
  ) { 
    this.initForm(initialForm);
  }

  get form(): FormGroup {
    return this._form;
  }

  get originalFormValue(): TModel {
    return this._originalFormValue;
  }

  protected initForm(initialForm: FormGroup) {
    this._originalFormValue = _.cloneDeep(initialForm.value);
    this._form = initialForm;
  }

  resetForm() {
    this._form.reset();
    this._form.patchValue(this._originalFormValue);
  }

  getFormValue(): TModel {
    return this._form.value;
  }

  getViewModel(): TModel {
    return this._form.value;
  }

  hasChanged(): boolean {
    return this._form.dirty;
  }

  hasError(): boolean {
    let isError = false;

    if (this._form?.errors?.length > 0) {
      return true;
    }

    Object.values(this._form.controls).forEach(control => {
      if (control.errors) {
        isError = true;
      }
    })

    return isError;
  }
}
