import { Injectable } from '@angular/core';
import { DataResponse } from '@core/interfaces-abstracts/data-response.interface';
import { EmployeeModel } from '@core/models/employee.model';
import { AppConfigService } from '@core/services/app-config.service';
import { ProxyService } from '@shared/services/proxy.service';
import { classToPlain, plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    const dataReq = classToPlain(data);
    console.log(dataReq);
    return this.proxy.post<DataResponse<EmployeeModel>>(url, data);
  }

  fetchEmployees(query?: any): Observable<DataResponse<EmployeeModel[]>> {
    const url = this.appConfigService.getEmployeeUrl();
    return this.proxy.get<DataResponse<EmployeeModel[]>>(url, query).pipe(
      map((res) => {
        const employees = res.DATA.map(r => {
          const mapper = plainToClass(EmployeeModel, r);
          return mapper;
        });

        return employees;
      })
    );
  }
}
