import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SampleModule } from './modules/sample/sample.module';
import { StoreModule } from './store/store.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './modules/employee/employee.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpTranslateLoader } from './core/services/http-translate-loader.service';
import { AuthModule } from '@auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule,
    SharedModule,
    SampleModule,
    EmployeeModule,
    AuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
