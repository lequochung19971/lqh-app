import { Injectable } from '@angular/core';
import { DataResponse } from '@core/interfaces-abstracts/data-response.interface';
import { EmployeeModel } from '@core/models/employee.model';
import { AppConfigService } from '@core/services/app-config.service';
import { ContentType, ProxyService } from '@shared/services/proxy.service';
import { classToPlain, plainToClass } from 'class-transformer';
import { Observable, of } from 'rxjs';
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
    const body = JSON.stringify(classToPlain(data));
    return this.proxy.post<DataResponse<EmployeeModel>>(url, body, { headers: { 'Content-type': ContentType.json } });
  }

  fetchEmployees(params?: any): Observable<any> {
    const url = this.appConfigService.getEmployeeUrl();
    return this.proxy.get<any>(url, { params }).pipe(
      map((res) => {
        const employees = res.DATA.map(r => {
          const mapper = plainToClass(EmployeeModel, r);
          return mapper;
        });

        const { totalCount: totalEmployees } = res.META;

        return { employees, totalEmployees };
      })
    );
  }

  deleteEmployeeById(data: EmployeeModel): Observable<DataResponse<any>> {
    let url = this.appConfigService.getEmployeeUrl();
    url = `${url}/${data._id}`;
    return this.proxy.delete(url);
  }

  updateEmployee(data: EmployeeModel): Observable<DataResponse<EmployeeModel>> {
    let url = this.appConfigService.getEmployeeUrl();
    url = `${url}/${data._id}`;
    const body = JSON.stringify(classToPlain(data));
    return this.proxy.put<DataResponse<EmployeeModel>>(url, body, { headers: { 'Content-type': ContentType.json } });
  }

  uploadAvatar(file: File): Observable<any> {
    if (file instanceof File) {
      const formData = new FormData();
      formData.append('image', file, file.name);
      return this.proxy.post('/uploadFiles', formData).pipe(
        map(res => res)
      );
    }

    return of({fileUrl: file});
  }
}
