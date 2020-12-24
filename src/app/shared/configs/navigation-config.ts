import { NavigationId } from 'src/app/core/enums/navigation-ids.enum';
import { NavigationName } from 'src/app/core/enums/navigation-names.enum';
import { NavigationConfig } from '../../core/interfaces/navigation-config.interface';


export const navigationConfig: NavigationConfig[] = [
  {
    id: NavigationId.sample,
    authorize: true,
    routerName: NavigationName.Sample,
    url: '/sample',
    icon: {
      active: '../../../../assets/icons/sample-white.svg',
      inActive: '../../../../assets/icons/sample.svg'
    }
  },
  {
    id: NavigationId.dashboard,
    authorize: true,
    routerName: NavigationName.Dashboard,
    url: '/dashboard',
    icon: {
      active: '../../../../assets/icons/dashboard-white.svg',
      inActive: '../../../../assets/icons/dashboard.svg'
    }
  },
  {
    id: NavigationId.employees,
    authorize: true,
    routerName: NavigationName.Employees,
    url: '/employees',
    icon: {
      active: '../../../../assets/icons/employees-white.svg',
      inActive: '../../../../assets/icons/employees.svg'
    }
  }
]
