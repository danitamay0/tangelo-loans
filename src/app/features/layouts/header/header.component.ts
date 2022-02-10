import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/features/shared/services/sidenav.service';
import { environment } from 'src/environments/environment';
import { LoansService } from '../../loans/services/loans.service';
import { AmountService } from '../services/amount.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  currentAmount = environment.baseAmount;
  amount$: Subscription

  constructor(private _sidenav: SidenavService,
    private _loan: LoansService,
    private _amount: AmountService) { }

  ngOnInit(): void {
    this.getAmount()

    this.amount$ = this._amount.updateData
      .subscribe((resp) => this.getAmount())
  }

  toggle() {
    this._sidenav.toggle()
  }

  getAmount() {
    this._loan.getLoansAumunt().subscribe(resp => {
      this.currentAmount = environment.baseAmount
      this.currentAmount -= resp.approved
    })
  }

  ngOnDestroy(): void {
    this.amount$.unsubscribe()
  }
}
