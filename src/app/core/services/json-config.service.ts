import { Injectable } from '@angular/core';
import provinces from '../json-config/provinces.json';
import districts from '../json-config/districts.json';
import wards from '../json-config/wards.json';

@Injectable({
  providedIn: 'root'
})
export class JsonConfigService {
  private _provinces: any[] = provinces;
  private _districts: any[] = districts;
  private _wards: any[] = wards;

  constructor() { 
  }

  getProvincesConfig() {
    return this._provinces;
  }

  getDistrictsConfig() {
    return this._districts;
  }

  getWardsConfig() {
    return this._wards;
  }
}
