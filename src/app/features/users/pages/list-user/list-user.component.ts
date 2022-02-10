import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Fetching } from 'src/app/features/shared/types/FetcingType';
import { StoreUserComponent } from '../../components/store-user/store-user.component';
import { User } from '../../interfaces/UserInteface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {
  fetching: Fetching = 'iddle'
  pagination = { _limit: 10, _page: 1, length: 0 }

  displayedColumns: string[] = ['id', 'name', 'email', 'cardId', 'action'];
  dataSource: MatTableDataSource<User>;

  constructor(private _users: UsersService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(currentPage: any = null) {
    this.fetching = 'pending'
    const data: any = { ...this.pagination }
    data._page = currentPage ? currentPage.pageIndex + 1 : 1

    this._users.getUsers(data)
      .subscribe((resp: any) => {
        this.fetching = 'succeded'
        this.pagination.length = resp.headers.get('X-Total-Count')
        const data = resp.body ? resp.body : []
        this.dataSource = new MatTableDataSource(data)
      }, err => console.log(err))

  }

  edit(user: User) {
    this.dialog.open(StoreUserComponent, {
      width: '70%',
      data: user
    }).afterClosed().subscribe(result => {
      if (result) {
        this.getUsers()
      }
    })
  }
}
