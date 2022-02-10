import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLoansComponent } from './pages/list-loans/list-loans.component';
import { LoansRoutingModule } from './loans-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { TableLoansComponent } from './components/table-loans/table-loans.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';


@NgModule({
  declarations: [
    ListLoansComponent,
    TableLoansComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoansModule { }
