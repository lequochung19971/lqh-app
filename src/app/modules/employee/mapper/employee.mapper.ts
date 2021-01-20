import { classes } from "@automapper/classes";
import { createMapper } from "@automapper/core";
import { addressInfoMapperProfile } from "@core/mapper-profile/address-info.mapper-profile";
import { employeeMapperProfile } from "@core/mapper-profile/employee.mapper-profile";
import { idCardMapperProfile } from "@core/mapper-profile/id-card.mapper-profile";

export const employeeMapper = createMapper({
  name: 'Employee',
  pluginInitializer: classes
})

employeeMapper
  .addProfile(employeeMapperProfile)
  .addProfile(idCardMapperProfile)
  .addProfile(addressInfoMapperProfile)