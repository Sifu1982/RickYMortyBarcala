import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./modules/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
