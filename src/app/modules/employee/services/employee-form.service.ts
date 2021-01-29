import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Gender } from '@core/enums/gender.enum';
import { Positions } from '@core/enums/positions.enum';
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
    super(formBuilder);
  }

  initialize(dataModel: EmployeeModel): void {
    const form = this.formBuilder.group({
      _id: [dataModel?._id || ''],
      firstName: [dataModel?.firstName ?? '', [Validators.required, Validators.maxLength(30)]],
      lastName: [dataModel?.lastName ?? '', [Validators.required, Validators.maxLength(30)]],
      dob: [dataModel?.dob ?? '', [Validators.required, this.validationsService.invalidDate()]],
      age: [dataModel?.age ?? ''],
      email: [dataModel?.email ?? '', [Validators.required, Validators.email]],
      phone: [dataModel?.phone ?? '', [Validators.required, this.validationsService.invalidMaxLengthWithFieldName(10, 'PHONE_LABEL')]],
      department: [dataModel?.department ?? '', [Validators.required]],
      position: [dataModel?.position ?? '' as Positions, [Validators.required]],
      gender : [dataModel?.gender ?? Gender.male],
      idCardInfo: this.formBuilder.group({
        idNumber: [dataModel?.idCardInfo?.idNumber ?? '', [Validators.required, this.validationsService.invalidMinLengthWithFieldName(10, 'ID_CARD_LABEL')]],
        createDate: [dataModel?.idCardInfo?.createDate ?? '', [Validators.required]],
        createPlace: [dataModel?.idCardInfo?.createPlace ?? '', [Validators.required, this.validationsService.invalidDate()]]
      }, { validators: this.validationsService.invaliedIDCardInfo() }),
      addressInfo: [dataModel?.addressInfo ?? '', [Validators.required]],
      password: [dataModel?.password ?? '', [Validators.required, this.validationsService.invalidPassword()]],
      confirmPassword: [dataModel?.confirmPassword ?? '', [this.validationsService.invalidConfirmPassword()]]
    });
    this.viewModel = dataModel;
    this.initForm(form);
  }
}
