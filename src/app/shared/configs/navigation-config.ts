import { NavigationId } from 'src/app/core/enums/navigation-ids.enum';
import { NavigationName } from 'src/app/core/enums/navigation-names.enum';
import { NavigationConfig } from '../../core/interfaces/navigation-config.interface';


export const navigationConfig: NavigationConfig[] = [
  {
    id: NavigationId.sample,
    authorize: true,
    routerName: NavigationName.Sample,
    matIconName: 'dashboard',
    url: '/sample',
  },
  {
    id: NavigationId.dashboard,
    authorize: true,
    routerName: NavigationName.Dashboard,
    matIconName: 'dashboard',
    url: '/dashboard',
  }
]
