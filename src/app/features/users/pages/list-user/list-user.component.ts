import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {
  fetching = 'iddle'

  constructor(private _users: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.fetching = 'pending'
    this.fetching = 'succeded'
    this.fetching = 'rejected'
    
    this._users.getUsers()
      .subscribe(res => console.log(res), err => console.log(err))

  }

}
