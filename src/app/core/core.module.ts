import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allCoreComponents } from './components';
import { ComponentBuilderComponent } from './components/component-builder/component-builder.component';

@NgModule({
  declarations: [...allCoreComponents],
  imports: [CommonModule],
  exports: [ComponentBuilderComponent],
})
export class CoreModule {}
