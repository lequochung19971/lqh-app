import { BuilderConfig } from '../../../core/interfaces/builder-config.interface';

export const employeePageConfig: BuilderConfig  = {
  metadata: {
    cssClass: {
      container: 'employee-container',
      row: 'employee-row'
    }
  },
  components: [
    {
      type: 'employeeTable',
      layoutDefinition: {
        col_lg: 12,
        col_md: 12,
        col_sm: 12,
        col_xl: 12
      }
    }
  ]
}