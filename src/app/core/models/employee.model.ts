import 'reflect-metadata';
import { Expose, Type } from 'class-transformer';
import { Gender } from '../enums/gender.enum';
import { Positions } from '../enums/positions.enum';
import { AddressModel } from './address.model';
import { BaseModel } from './base.model';
import { IDCardModel } from './id-card.model';
import { DepartmentModel } from './department.model';
import { PositionModel } from './position.model';
export class EmployeeModel extends BaseModel {
  @Expose()
  _id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  dob: string;

  @Expose()
  age: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  @Type(() => DepartmentModel)
  department: DepartmentModel;

  @Expose()
  @Type(() => PositionModel)
  position: Positions;

  @Expose()
  gender: Gender;

  @Expose()
  @Type(() => AddressModel)
  addressInfo: AddressModel;

  @Expose()
  @Type(() => IDCardModel)
  idCardInfo: IDCardModel;

  @Expose()
  password?: string;
  
  avatar?: string;

  confirmPassword?: string;

  constructor(props?: EmployeeModel) {
    super(props);
  }
}
