import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allSharedComponents } from './components';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { JSON_OBJECT_TYPE_CONFIG_TOKEN } from '../core/consts/injection-tokens.const';
import { allSharedJsonObjectConfigs } from './configs';
import { allDirective } from './directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { allSharedPipes } from './pipes';
@NgModule({
  declarations: [...allSharedComponents, ...allDirective, ...allSharedPipes],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...allSharedComponents,
    ...allDirective,
    ...allSharedPipes
  ],
  providers: [
    {
      provide: JSON_OBJECT_TYPE_CONFIG_TOKEN,
      multi: true,
      useValue: allSharedJsonObjectConfigs
    }
  ]
})
export class SharedModule { }
