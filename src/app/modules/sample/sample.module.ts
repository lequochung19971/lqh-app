import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleRoutingModule } from './sample-routing.module';
import { COMPONENT_TYPE_CONFIG_TOKEN, BUILDER_CONFIG_TOKEN } from '../../core/consts/injection-tokens.const';
import { allSampleTypeConfig } from './components';
import { allSampleComponents } from './components/index';
import { allSamplePageComponent } from './pages';
import { CoreModule } from '../../core/core.module';
import { allSampleBuilderConfig } from './configs/index';

@NgModule({
  declarations: [...allSamplePageComponent, ...allSampleComponents],
  imports: [CommonModule, SampleRoutingModule, CoreModule],
  providers: [
    {
      provide: COMPONENT_TYPE_CONFIG_TOKEN,
      multi: true,
      useValue: allSampleTypeConfig,
    },
    {
      provide: BUILDER_CONFIG_TOKEN,
      multi: true,
      useValue: allSampleBuilderConfig
    }
  ],
})
export class SampleModule {}
