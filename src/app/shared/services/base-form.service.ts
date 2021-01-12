import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseModel } from 'src/app/core/models/base.model';
import * as _ from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFormService<TModel extends BaseModel> {
  private _form: FormGroup;
  private _originalFormValue: TModel; 

  constructor(
    initialForm: FormGroup,
    protected formBuilder: FormBuilder,
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
    this.form.reset();
    this.form.patchValue(this._originalFormValue);
  }

}
