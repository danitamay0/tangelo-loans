import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutsModule } from './layouts/layouts.module';



@NgModule({
  declarations: [ 
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule,
    LayoutsModule
  ]
})
export class FeaturesModule { }
