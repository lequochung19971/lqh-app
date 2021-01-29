import { TypeConfig } from '../../core/interfaces-abstracts/type-config.interface';
import { GetSample, PostSample, SampleActionType } from './sample.action';
import { ModeThemeActionType, UpdateDarkMode, UpdateLightMode, AutoChangeMode } from './mode-theme.action';
import { EmployeeActionType, FetchEmployeesDataTable } from './employee.action';

export const allActionConfig: TypeConfig[] = [
  {
    name: SampleActionType.GET_SAMPLE,
    type: GetSample
  },
  {
    name: SampleActionType.POST_SAMPLE,
    type: PostSample
  },
  {
    name: ModeThemeActionType.DARK_MODE,
    type: UpdateDarkMode
  },
  {
    name: ModeThemeActionType.LIGHT_MODE,
    type: UpdateLightMode
  },
  {
    name: ModeThemeActionType.AUTO,
    type: AutoChangeMode
  },
  {
    name: EmployeeActionType.FETCH_EMPLOYEES_DATA_TABLE,
    type: FetchEmployeesDataTable
  }
]