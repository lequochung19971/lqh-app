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

  initialize(viewModel: EmployeeModel): void {
    const form = this.formBuilder.group({
      _id: [viewModel?._id || ''],
      firstName: [viewModel?.firstName ?? '', [Validators.required, Validators.maxLength(30)]],
      lastName: [viewModel?.lastName ?? '', [Validators.required, Validators.maxLength(30)]],
      dob: [viewModel?.dob ?? '', [Validators.required, this.validationsService.invalidDate()]],
      age: [viewModel?.age ?? ''],
      email: [viewModel?.email ?? '', [Validators.required, Validators.email]],
      phone: [viewModel?.phone ?? '', [Validators.required, this.validationsService.invalidMaxLengthWithFieldName(10, 'PHONE_LABEL')]],
      department: [viewModel?.department ?? '', [Validators.required]],
      position: [viewModel?.position ?? '' as Positions, [Validators.required]],
      gender : [viewModel?.gender ?? Gender.male],
      idCardInfo: this.formBuilder.group({
        idNumber: [viewModel?.idCardInfo?.idNumber ?? '', [Validators.required, this.validationsService.invalidMinLengthWithFieldName(10, 'ID_CARD_LABEL')]],
        createDate: [viewModel?.idCardInfo?.createDate ?? '', [Validators.required]],
        createPlace: [viewModel?.idCardInfo?.createPlace ?? '', [Validators.required, this.validationsService.invalidDate()]]
      }, { validators: this.validationsService.invaliedIDCardInfo() }),
      addressInfo: [viewModel?.addressInfo ?? '', [Validators.required]],
      password: [viewModel?.password ?? '', [Validators.required, this.validationsService.invalidPassword()]],
      confirmPassword: [viewModel?.confirmPassword ?? '', [this.validationsService.invalidConfirmPassword()]],
      avatar: [viewModel?.avatar]
    });
    this.viewModel = viewModel;
    this.initForm(form);
  }
}
