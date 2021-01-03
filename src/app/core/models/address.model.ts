import { AddressTypes } from "../enums/address-types.enum";

export class AddressModel {
  province: Address;
  district: Address;
  ward: Address;
}

export class Address {
  name?: string;
  type?: AddressTypes;
  nameWithType?: string;
  path?: string;
  pathWithType?:string;
  code?: string;
  parentCode?:string;
  slug?: string;
}