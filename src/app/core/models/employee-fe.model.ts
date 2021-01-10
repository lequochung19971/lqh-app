import { Departments } from '../enums/departments.enum';
import { Gender } from '../enums/gender.enum';
import { BaseModel } from './base.model';

export class EmployeeFE extends BaseModel{
  _id: string;
  dob: string;
  age: string;
  fullName: string;
  email: string;
  phone: string;
  department: Departments;
  position: any;
  gender: Gender;
  avatar: string;
  password: string;
  confirmPassword?: string;

  constructor(props?: EmployeeFE) {
    super(props)
  }
}
