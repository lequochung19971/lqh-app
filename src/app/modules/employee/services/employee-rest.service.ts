import { Injectable } from '@angular/core';
import { DataResponse } from '@core/interfaces-abstracts/data-response.interface';
import { EmployeeModel } from '@core/models/employee.model';
import { AppConfigService } from '@core/services/app-config.service';
import { ProxyService } from '@shared/services/proxy.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestService {

  constructor(
    protected proxy: ProxyService,
    protected appConfigService: AppConfigService
  ) { }

  createEmployee(data: EmployeeModel): Observable<DataResponse<EmployeeModel>> {
    const url = this.appConfigService.getEmployeeUrl();
    return this.proxy.post<DataResponse<EmployeeModel>>(url, data);
  }
}
