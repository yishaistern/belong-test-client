import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'newUser',
    loadChildren: () => import('./modules/new-user/new-user.module').then(m => m.NewUserModule)
  },
  {
    path: 'tower-list',
    loadChildren: () => import('./modules/tower-list/tower-list.module').then(m => m.TowerListModule)
  },
  {
    path: '',
    redirectTo: 'newUser',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
