import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeePageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeRoutingModule { }
