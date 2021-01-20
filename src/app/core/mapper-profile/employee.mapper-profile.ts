import { MappingProfile } from "@automapper/types";
import { EmployeeDTO } from "@core/models/employee-dto.model";
import { EmployeeModel } from "@core/models/employee.model";

export const employeeMapperProfile: MappingProfile = (mapper) => {
  mapper
    .createMap(EmployeeModel, EmployeeDTO)
}