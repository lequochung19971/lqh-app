import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allCoreComponents } from './components';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [...allCoreComponents],
  imports: [CommonModule, HttpClientModule],
  exports: [...allCoreComponents],
})
export class CoreModule {}
