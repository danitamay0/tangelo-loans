import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoanData } from '../../interfaces/LoanDataInterface';
import { LoansService } from '../../services/loans.service';
import { Fetching } from '../../../shared/types/FetcingType';
import { SwalService } from 'src/app/features/shared/services/swal.service';
import { AmountService } from 'src/app/features/layouts/services/amount.service';

@Component({
  selector: 'app-table-loans',
  templateUrl: './table-loans.component.html',
  styleUrls: ['./table-loans.component.sass']
})

export class TableLoansComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input('status') status: string

  fetching: Fetching = 'iddle'
  pagination = { _limit: 10, _page: 1, length: 0 }

  displayedColumns: string[] = ['id', 'value', 'user.name',];
  dataSource: MatTableDataSource<LoanData>;

  constructor(private _loan: LoansService, private _swal: SwalService, private _amout:AmountService) { }

  ngOnInit(): void {
    this.status == 'approved' ? this.displayedColumns.push('action') : null
    this.getLoans()
  }

  getLoans(currentPage: any = null) {
    this.fetching = 'pending'

    const data: any = { ...this.pagination }
    data._page = currentPage ? currentPage.pageIndex + 1 : 1
    this.status != 'all' ? data.status = this.status : null

    this._loan.getLoans(data)
      .subscribe((resp: any) => {
        this.fetching = 'succeded'
        this.pagination.length = resp.headers.get('X-Total-Count')
        const data = resp.body ? resp.body : []
        this.dataSource = new MatTableDataSource(data)

      }, err => this.fetching = 'rejected');

  }

  payLoan(loan: LoanData) {
    this._swal.show({
      icon: 'question',
      title: '¿Está seguro?',
      text: `Se destina a confirmar el pago del prestámo de ${loan.user.name}`,
      showCancel: true
    }).then(r => {
      if (r.isConfirmed) {
        
        const temporalLoan = { ...loan }
        delete temporalLoan.user
        temporalLoan.status = 'paid'
        
        this._loan.putLoans(loan.id, { ...temporalLoan }).subscribe(res => {
          this._amout.updateData.emit()
          this._loan.statisticsEmitter.emit()
          
          this._swal.show({
            icon: 'success',
            title: 'Felicidades',
            text: `Se ha guardado con éxito el pago`,
            showCancel: false
          })
          this.getLoans()
        })
      }
    })
  }
}