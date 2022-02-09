import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './pages/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListUserComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
