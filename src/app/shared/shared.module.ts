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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpTranslateLoader } from '../core/services/http-translate-loader.service';
import { HttpClient } from '@angular/common/http';
import { allSharedControls } from './controls';
@NgModule({
  declarations: [...allSharedComponents, ...allSharedControls, ...allDirective, ...allSharedPipes ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    ...allSharedComponents,
    ...allSharedControls,
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
