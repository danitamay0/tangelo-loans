import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    CreateUserComponent,
  
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
