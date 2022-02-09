import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    

  ],
  exports: [HeaderComponent]
})
export class LayoutsModule { }
