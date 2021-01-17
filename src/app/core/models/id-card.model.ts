import dayjs from "dayjs";
import { Address } from "./address.model";
import { BaseModel } from "./base.model";

export class IDCard extends BaseModel {
  idNumber: string;
  createDate: dayjs.Dayjs;
  createPlace: Address;
  constructor(props?: IDCard) {
    super(props)
  }
}