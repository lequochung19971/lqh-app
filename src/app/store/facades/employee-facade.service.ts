import { Injectable } from '@angular/core';
import { BaseFacadeService } from '@core/services/base-facade.service';
import { LocatorFacadeService } from '@core/services/locator-facade.service';
import { EmployeeRestService } from '@modules/employee/services/employee-rest.service';
import { map } from 'rxjs/operators';
import { EmployeeActionReducer } from '../reducers/employee.reducer';
import { EmployeeState } from '../states/employee.state';
import { initialState } from '../states/employee.state';
import { EmployeeActionType } from '../actions/employee.action';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFacadeService extends BaseFacadeService<EmployeeState> {

  constructor(
    protected lfs: LocatorFacadeService,
    protected employeeRestService: EmployeeRestService
  ) { 
    super(
      { initialState, actionReducer: new EmployeeActionReducer() },
      lfs
    );
  }

  updateDataTable(params?: any): void {
    this.employeeRestService.fetchEmployees(params).pipe(
      map(res => {
        this.invokeAction(EmployeeActionType.FETCH_EMPLOYEES_DATA_TABLE, res);
      })
    ).subscribe();
  }
}
