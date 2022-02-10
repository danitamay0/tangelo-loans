import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {
  statistics: any
  statistics$: Subscription

  constructor(private _loan: LoansService) { }

  ngOnInit(): void {
    this.getLoans()
    this.statistics$ = this._loan.statisticsEmitter
      .subscribe(resp => this.getLoans())
  }

  getLoans() {
    this._loan.getLoansStatistics()
    .subscribe(resp =>  this.statistics = resp)
  }

  ngOnDestroy(): void {
    this.statistics$.unsubscribe()
  }

}
