import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LqhShellComponent } from './shared/components/lqh-shell/lqh-shell.component';

const routes: Routes = [
  {
    path: 'sample',
    component: LqhShellComponent,
    loadChildren: () => import('./modules/sample/sample.module').then((m) => m.SampleModule),
  },
  {
    path: '',
    component: LqhShellComponent,
  },
  {
    path: 'dashboard',
    component: LqhShellComponent,
    loadChildren: () => import('./modules/sample/sample.module').then((m) => m.SampleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
