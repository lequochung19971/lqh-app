import { Component, Input, OnInit } from '@angular/core';
import { JsonConfigService } from '../../../core/services/json-config.service';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { Address, AddressModel } from '../../../core/models/address.model';
import { AddressTypes, ProvinceType, DistrictType, WardType } from 'src/app/core/enums/address-types.enum';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash-es';

@Component({
  selector: 'lqh-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.scss']
})
export class AddressDialogComponent implements OnInit {
  @Input() isFullAddressMode: boolean;
  @Input() dataModel: AddressModel;
  
  originalDataSource: Address[] = [];
  dataSource: Address[] = [];
  addressChipList: Address[];
  addressModel: AddressModel;

  provinces: Address[];
  provinceTypes: AddressTypes[];
  districts: Address[];
  districtTypes: AddressTypes[];
  wards: Address[];
  wardTypes: AddressTypes[];

  searchControl: FormControl;

  constructor(
    protected jsonConfigService: JsonConfigService,
    protected dialogRef: MatDialogRef<AddressDialogComponent>,
    ) { }

  ngOnInit(): void {
    this.initAddressModel();
    this.initAddressConfig();
    this.initAddressDataSource();
    this.initAddressChiplist();
    this.startSearchingAddress();
  }

  protected initAddressConfig() {
    this.provinces = this.jsonConfigService.getProvincesConfig();
    this.districts = this.jsonConfigService.getDistrictsConfig();
    this.wards = this.jsonConfigService.getWardsConfig();
    this.provinceTypes = [ProvinceType.thanhPho, ProvinceType.tinh];
    this.districtTypes = [DistrictType.thanhPho, DistrictType.quan, DistrictType.huyen, DistrictType.thiXa];
    this.wardTypes = [WardType.phuong, WardType.thiTran, WardType.xa];
  }

  protected initAddressDataSource() {
    this.originalDataSource = this.provinces;

    if (this.addressModel.province) {
      this.originalDataSource = this.districts.filter(district => district.parentCode === this.addressModel.province.code);
    }

    if (this.addressModel.district) {
      this.originalDataSource = this.wards.filter(district => district.parentCode === this.addressModel.district.code);
    }

    if (this.addressModel.district) {
      this.originalDataSource = this.wards.filter(district => district.parentCode === this.addressModel.district.code);
    }

    this.dataSource = this.originalDataSource;
  }

  protected initAddressChiplist() {
    this.addressChipList = [];

    if (this.addressModel?.province) {
      this.addressChipList.push(this.addressModel.province);
    }

    if (this.addressModel?.district) {
      this.addressChipList.push(this.addressModel.district);
    }

    if (this.addressModel?.ward) {
      this.addressChipList.push(this.addressModel.ward);
    }
  }

  protected initAddressModel() {
    this.addressModel = this.dataModel ? _.cloneDeep(this.dataModel) : new AddressModel();
  }

  protected startSearchingAddress() {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      map((key: string) => {
        key = key.toLocaleLowerCase();
        this.dataSource = this.originalDataSource.filter((source: Address) => this.filterAddress(source, key))
      })
    ).subscribe();
  }

  protected filterAddress(source: Address, key: string) {
    const normalString = source.slug.split('-').join(' ').toLowerCase();
    const localeString = source.name.toLocaleLowerCase();
    return normalString.includes(key) || localeString.includes(key);
  }

  protected onSelectedAddress(address: Address) {
    const { length: chipListLength } = this.addressChipList;
    if (chipListLength === 3) { return; }

    if (this.isFullAddressMode) {
      if (this.isProvince(address)) {
        this.originalDataSource = this.districts.filter(district => district.parentCode === address.code);
        this.addressModel.province = address;
      } else if (this.isDistrict(address)) {
        this.originalDataSource = this.wards.filter(district => district.parentCode === address.code);
        this.addressModel.district = address;
      } else if (this.isWard(address)) {
        this.addressModel.ward = address;
        this.updateDataModel();
        this.dialogRef.close(address);
      }

      this.addressChipList.push(address);
      this.dataSource = this.originalDataSource;
      this.resetSearchControl();
    } else {
      // this.updateDataModel();
      this.dialogRef.close(address);
    }
  }

  updateDataModel() {
    const { province, district, ward } = this.addressModel;
    this.dataModel.province = province;
    this.dataModel.district = district;
    this.dataModel.ward = ward;
  }

  protected isProvince(address: Address): boolean {
    return !address.parentCode && this.provinceTypes.includes(address.type as AddressTypes);
  }

  protected isDistrict(address: Address): boolean {
    return address.parentCode && this.districtTypes.includes(address.type as AddressTypes)
  }

  protected isWard(address: Address): boolean {
    return address.parentCode && this.wardTypes.includes(address.type as AddressTypes)
  }

  protected removeAddress(address: Address) {
    if (this.isProvince(address)) {
      this.addressChipList = [];
      this.originalDataSource = this.provinces;
      this.addressModel.province = null;
      this.addressModel.district = null;
      this.addressModel.ward = null;
    } else if (this.isDistrict(address)) {
      this.addressChipList.splice(1, 2)
      this.addressModel.district = null;
      this.addressModel.ward = null;
      this.originalDataSource = this.districts.filter(district => district.parentCode === this.addressModel.province.code);
    } else if (this.isWard(address)) {
      this.addressChipList.splice(2, 1)
      this.addressModel.ward = null;
    }

    this.dataSource = this.originalDataSource;
    this.resetSearchControl();
  }
  
  protected resetSearchControl() {
    this.searchControl.patchValue('');
  }
}