import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { allEmployeePages } from './pages';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { allEmployeeComponents } from './components';
import { COMPONENT_TYPE_CONFIG_TOKEN, BUILDER_CONFIG_TOKEN } from '../../core/consts/injection-tokens.const';
import { allEmployeeComponentConfigs } from './components/index';
import { allEmployeeBuilderConfigs } from './configs';
import { allEmployeeDialogs } from './dialogs';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpTranslateLoader } from '../../core/services/http-translate-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...allEmployeePages, ...allEmployeeComponents, ...allEmployeeDialogs],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    SharedModule, 
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: COMPONENT_TYPE_CONFIG_TOKEN,
      multi: true,
      useValue: allEmployeeComponentConfigs,
    },
    {
      provide: BUILDER_CONFIG_TOKEN,
      multi: true,
      useValue: allEmployeeBuilderConfigs
    }
  ]
})
export class EmployeeModule { }
