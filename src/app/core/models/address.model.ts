import { AutoMap } from "@automapper/classes";
import { AddressTypes } from "../enums/address-types.enum";
import { BaseModel } from "./base.model";

export class AddressModel extends BaseModel {
  @AutoMap(() => Address)
  province: Address;
  
  @AutoMap(() => Address)
  district: Address;

  @AutoMap(() => Address)
  ward: Address;

  constructor(props?: AddressModel) {
    super(props);
  }
}

export class Address extends BaseModel {
  @AutoMap()
  name?: string;
  
  @AutoMap()
  type?: AddressTypes;
  
  @AutoMap()
  nameWithType?: string;
  
  @AutoMap()
  path?: string;
  
  @AutoMap()
  pathWithType?:string;
  
  @AutoMap()
  code?: string;
  
  @AutoMap()
  parentCode?:string;
  
  @AutoMap()
  slug?: string;

  constructor(props?: Address) {
    super(props);
  }
}