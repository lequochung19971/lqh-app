import { AutoMap } from '@automapper/classes';
import { Departments } from '../enums/departments.enum';
import { Gender } from '../enums/gender.enum';
import { Positions } from '../enums/positions.enum';
import { AddressModel } from './address.model';
import { BaseModel } from './base.model';
import { IDCardModel } from './id-card.model';

export class EmployeeModel extends BaseModel{
  @AutoMap()
  _id: string;

  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  dob: string;

  @AutoMap()
  age: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phone: string;

  @AutoMap()
  department: Departments;

  @AutoMap()
  position: Positions;

  @AutoMap()
  gender: Gender;

  @AutoMap(() => AddressModel)
  addressInfo: AddressModel;

  @AutoMap(() => IDCardModel)
  idCardInfo: IDCardModel;
  
  @AutoMap()
  password?: string;
  
  avatar?: string;

  confirmPassword?: string;

  constructor(props?: EmployeeModel) {
    super(props)
  }
}