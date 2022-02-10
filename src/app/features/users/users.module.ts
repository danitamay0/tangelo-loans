import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { StoreUserComponent } from './components/store-user/store-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateUserComponent,
    ListUserComponent,
    StoreUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
