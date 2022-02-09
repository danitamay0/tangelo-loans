import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLoansComponent } from './pages/list-loans/list-loans.component';
import { LoansRoutingModule } from './loans-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';
import { TableLoansComponent } from './components/table-loans/table-loans.component';


@NgModule({
  declarations: [
    ListLoansComponent,
    TableLoansComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    MaterialModule,
    MatTabsModule
  ]
})
export class LoansModule { }
