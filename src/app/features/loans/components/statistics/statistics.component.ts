import { Component, OnInit } from '@angular/core';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {
  statistics: any
  constructor(private _loan: LoansService) { }

  ngOnInit(): void {
    this.getLoans()
  }

  getLoans() {
    this._loan.getLoansStatistics().subscribe(resp => {
      this.statistics = resp
    })
  }

}
