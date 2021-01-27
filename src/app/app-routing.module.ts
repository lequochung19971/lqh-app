import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LqhShellComponent } from './shared/components/lqh-shell/lqh-shell.component';
import { AuthGuard } from '@auth/guards/auth.guard';
import { AppGuard } from '@auth/guards/app.guard';
import { LoginComponent } from '@auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'sample',
    component: LqhShellComponent,
    loadChildren: () => import('./modules/sample/sample.module').then((m) => m.SampleModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LqhShellComponent,
    loadChildren: () => import('./modules/sample/sample.module').then((m) => m.SampleModule),
    canActivate: [AppGuard],
    canLoad: [AppGuard]
  },
  {
    path: 'employees',
    component: LqhShellComponent,
    loadChildren: () => import('./modules/employee/employee.module').then((m) => m.EmployeeModule),
    canActivate: [AppGuard],
    canLoad: [AppGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
