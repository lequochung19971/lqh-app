import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseModel } from '@core/models/base.model';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFormService<TModel extends BaseModel> {
  private _form: FormGroup;
  private _originalFormValue: any;
  private _viewModel: TModel;

  constructor(
    protected formBuilder: FormBuilder,
  ) { 
  }

  abstract initialize(data: TModel): void;

  get form(): FormGroup {
    return this._form;
  }

  get originalFormValue(): TModel {
    return this._originalFormValue;
  }

  get viewModel(): TModel {
    return this._viewModel;
  }

  set viewModel(model: TModel) {
    this._viewModel = model;
  }

  getViewModel(): TModel {
    return this.viewModel;
  }

  setViewModel(model: TModel): void {
    this.viewModel = model;
  }

  protected initForm(initialForm: FormGroup): void {
    this._originalFormValue = cloneDeep(initialForm.value);
    this._form = initialForm;
  }

  resetForm(): void {
    this._form.reset();
    this._form.patchValue(this._originalFormValue);
  }

  getFormValue(): TModel {
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
    });

    return isError;
  }
}
