import dayjs from 'dayjs';
import { Departments } from '../enums/departments.enum';
import { Gender } from '../enums/gender.enum';
import { Positions } from '../enums/positions.enum';
import { AddressModel } from './address.model';
import { BaseModel } from './base.model';
import { IDCard } from './id-card.model';

export class EmployeeFE extends BaseModel{
  _id: string;
  firstName: string;
  lastName: string;
  dob: dayjs.Dayjs;
  age: string;
  email: string;
  phone: string;
  department: Departments;
  position: Positions;
  gender: Gender;
  addressInfo: AddressModel;
  idCardInfo: IDCard;
  avatar?: string;
  password?: string;
  confirmPassword?: string;

  constructor(props?: EmployeeFE) {
    super(props)
  }
}
