import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from './core/core.module';
import { SampleModule } from './modules/sample/sample.module';
import { StoreModule } from './store/store.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './modules/employee/employee.module';
@NgModule({
  declarations: [
    AppComponent,
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
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
