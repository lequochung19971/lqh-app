import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SamplePageComponent } from './pages/sample-page/sample-page.component';

const routes: Routes = [
  {
    path: '',
    component: SamplePageComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SampleRoutingModule { }
