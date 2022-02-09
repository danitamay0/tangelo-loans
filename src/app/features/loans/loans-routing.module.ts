import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLoansComponent } from './pages/list-loans/list-loans.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListLoansComponent
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
export class LoansRoutingModule { }
