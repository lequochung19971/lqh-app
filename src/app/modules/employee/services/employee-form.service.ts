import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { Departments } from '../../../core/enums/departments.enum';
import { Gender } from '../../../core/enums/gender.enum';
import { Positions } from '../../../core/enums/positions.enum';
import { Address } from '../../../core/models/address.model';
import { EmployeeFE } from '../../../core/models/employee-fe.model';
import { BaseFormService } from '../../../shared/services/base-form.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormService extends BaseFormService<EmployeeFE> {

  constructor(
    public formBuilder: FormBuilder,
    protected validationsService: ValidationsService,
    ) { 
    super(formBuilder.group({
      _id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required, validationsService.invalidDate]],
      age: [''],
      email: [''],
      phone: [''],
      department: ['' as Departments],
      position: ['' as Positions],
      gender : [Gender.male],
      idCardInfo: formBuilder.group({
        idNumber: [''],
        createDate: ['', Validators.required],
        createPlace: [([] as Address[])]
      }),
      addressInfo: [null, [Validators.required]],
    }), formBuilder);
  }
}
