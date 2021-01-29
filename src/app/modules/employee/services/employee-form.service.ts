import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Gender } from '@core/enums/gender.enum';
import { Positions } from '@core/enums/positions.enum';
import { DepartmentModel } from '@core/models/department.model';
import { EmployeeModel } from '@core/models/employee.model';
import { BaseFormService } from '@shared/services/base-form.service';
import { ValidationsService } from '@shared/services/validations.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormService extends BaseFormService<EmployeeModel> {

  constructor(
    public formBuilder: FormBuilder,
    protected validationsService: ValidationsService,
    ) {
    super(
      formBuilder,
      formBuilder.group({
        _id: [''],
        firstName: ['', [Validators.required, Validators.maxLength(30)]],
        lastName: ['', [Validators.required, Validators.maxLength(30)]],
        dob: ['', [Validators.required, validationsService.invalidDate()]],
        age: [''],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, validationsService.invalidMaxLengthWithFieldName(10, 'PHONE_LABEL')]],
        department: [new DepartmentModel(), [Validators.required]],
        // department: formBuilder.group(new DepartmentModel()),
        position: ['' as Positions, [Validators.required]],
        gender : [Gender.male],
        idCardInfo: formBuilder.group({
          idNumber: ['', [Validators.required, validationsService.invalidMinLengthWithFieldName(10, 'ID_CARD_LABEL')]],
          createDate: ['', [Validators.required]],
          createPlace: [null, [Validators.required, validationsService.invalidDate()]]
        }, { validators: validationsService.invaliedIDCardInfo() }),
        addressInfo: ['', [Validators.required]],
        password: ['', [Validators.required, validationsService.invalidPassword()]],
        confirmPassword: ['', [validationsService.invalidConfirmPassword()]]
      }));
  }
}
