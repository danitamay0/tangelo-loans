import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { CardStatisticsComponent } from './components/card-statistics/card-statistics.component';


@NgModule({
  declarations: [
    LoadingComponent,
    CardStatisticsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [LoadingComponent,CardStatisticsComponent]
})
export class SharedModule { }
