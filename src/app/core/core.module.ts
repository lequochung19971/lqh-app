import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allCoreComponents } from './components';
@NgModule({
  declarations: [...allCoreComponents],
  imports: [CommonModule],
  exports: [...allCoreComponents],
})
export class CoreModule {}
