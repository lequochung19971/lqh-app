import { TypeConfig } from '../../core/interfaces/type-config.interface';
import { SampleFadadeService } from './sample-fadade.service';
import { EmployeeFacadeService } from './employee-facade.service';

export const allFacadeConfig: TypeConfig[] = [
  {
    name: 'sampleFacade',
    type: SampleFadadeService
  },
  {
    name: 'employeeFacade',
    type: EmployeeFacadeService
  }
]