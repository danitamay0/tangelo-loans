import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { OutsideRoutingModule } from './outside-routing.module';
import { MaterialModule } from '../material/material.module';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../features/shared/shared.module';
import { FormApplyComponent } from './components/form-apply/form-apply.component';
import { BannerApplyComponent } from './components/banner-apply/banner-apply.component';



@NgModule({
  declarations: [
    HomeComponent,
    ApplyLoanComponent,
    FormApplyComponent,
    BannerApplyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OutsideRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OutsideModule { }
