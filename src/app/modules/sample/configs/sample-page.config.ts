import { BuilderConfig } from '../../../core/interfaces-abstracts/builder-config.interface';

export const samplePageConfig: BuilderConfig  = {
  metadata: {
    cssClass: {
      container: 'sample-page',
      row: 'sample-row'
    }
  },
  components: [
    {
      type: 'one',
      layoutDefinition: {
        col_lg: 6
      },
      cssClass: {
        col: 'p-2'
      }
    },
    {
      type: 'two',
      layoutDefinition: {
        col_lg: 6
      },
      cssClass: {
        col: 'p-2'
      }
    }
  ]
}