import { Departments } from '../enums/departments.enum';
import { Gender } from '../enums/gender.enum';

export class EmployeeFE {
  _id: String;
  dob: String;
  age: Number;
  fullName: String;
  email: String;
  phone: String;
  department: Departments;
  gender: Gender;
  avatar: String;
  password: String;
  confirmPassword?: String;

  constructor(props?: any) {
    if (props) {
      this._id = props._id;
      this.dob = props.dob;
      this.age = props.age;
      this.fullName = props.fullName;
      this.email = props.email;
      this.phone = props.phone;
      this.department = props.department;
      this.password = props.password;
      this.confirmPassword = props.password;
      this.gender = props.gender;
      this.avatar = props.avatar;
    }
  }
}
