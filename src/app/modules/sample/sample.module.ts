import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleRoutingModule } from './sample-routing.module';
import { COMPONENT_TYPE_CONFIG_TOKEN, BUILDER_CONFIG_TOKEN } from '../../core/consts/injection-tokens.const';
import { allSampleComponentsTypeConfigs } from './components';
import { allSampleComponents } from './components/index';
import { allSamplePageComponent } from './pages';
import { allSampleBuilderConfig } from './configs/index';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [...allSamplePageComponent, ...allSampleComponents],
  imports: [CommonModule, SampleRoutingModule, SharedModule, MaterialModule],
  providers: [
    {
      provide: COMPONENT_TYPE_CONFIG_TOKEN,
      multi: true,
      useValue: allSampleComponentsTypeConfigs,
    },
    {
      provide: BUILDER_CONFIG_TOKEN,
      multi: true,
      useValue: allSampleBuilderConfig
    }
  ],
})
export class SampleModule {}
