import { Component, OnInit } from '@angular/core';
import { statusLoans } from '../../dataset/dataset';


@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.sass']
})
export class ListLoansComponent implements OnInit {
  statusLoans = statusLoans

  constructor() { }

  ngOnInit(): void {

  }


}
