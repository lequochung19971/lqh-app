import { BaseAction } from "@core/interfaces-abstracts/base-action.interface";

export enum EmployeeActionType {
  FETCH_EMPLOYEES_DATA_TABLE = '@Employee/FetchDataTable',
}

export class FetchEmployeesDataTable implements BaseAction {
  readonly type = EmployeeActionType.FETCH_EMPLOYEES_DATA_TABLE;
  constructor(readonly payload: any) {}
}

export type EmployeeAction = FetchEmployeesDataTable;