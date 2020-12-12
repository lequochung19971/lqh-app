import { OneComponent } from './one/one.component';
import { TypeConfig } from '../../../core/interfaces/type-config.interface';
import { TwoComponent } from './two/two.component';

export const allSampleComponents = [
  OneComponent,
  TwoComponent
]

export const allSampleTypeConfig: TypeConfig[] = [
  {
    name: 'one',
    type: OneComponent
  },
  {
    name: 'two',
    type: TwoComponent
  }
]