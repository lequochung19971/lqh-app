import 'reflect-metadata';
import { Expose, Transform, Type } from 'class-transformer';
import { Address } from './address.model';
import { BaseModel } from './base.model';

export class IDCardModel extends BaseModel {
  @Expose()
  idNumber: string;

  @Expose()
  createDate: string;

  @Expose()
  @Type(() => Address)
  @Transform(({value}) => Array.isArray(value) ? value[0] : value, { toPlainOnly: true })
  createPlace: Address;
  
  constructor(props?: IDCardModel) {
    super(props);
  }
}
