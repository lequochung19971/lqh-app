import { Injectable } from '@angular/core';
import { Address } from '@core/models/address.model';
import { DepartmentModel } from '@core/models/department.model';
import { PositionModel } from '@core/models/position.model';
import provinces from '../json-config/provinces.json';
import districts from '../json-config/districts.json';
import wards from '../json-config/wards.json';
import departments from '../json-config/departments.json';
import positions from '../json-config/positions.json';
@Injectable({
  providedIn: 'root'
})
export class JsonConfigService {
  private _provinces = provinces as Address[];
  private _districts = districts as Address[];
  private _wards = wards as Address[];
  private _departments = departments as DepartmentModel[];
  private _positions = positions as PositionModel[];

  constructor() { 
  }

  getProvincesConfig(): Address[] {
    return this._provinces;
  }

  getDistrictsConfig(): Address[] {
    return this._districts;
  }

  getWardsConfig(): Address[] {
    return this._wards;
  }

  getDepartmentsConfig(): DepartmentModel[] {
    return this._departments;
  }

  getPositionsConfig(): PositionModel[] {
    return this._positions;
  }
}
