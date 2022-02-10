import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LoanData } from '../interfaces/LoanDataInterface';
import { amountCurrentData, statisticsData } from '../dataset/dataset';
import { funtionsLoans } from '../helpers/loanHeper';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  private baseUrl = environment.baseUrl
  statisticsEmitter = new EventEmitter()

  constructor(private http: HttpClient) { }

  getLoans(params = {}) {
    return this.http.get(`${this.baseUrl}/loans?_expand=user`, {
      params: params,
      observe: 'response'
    })
  }

  putLoans(id: number, body = {}) {
    return this.http.put(`${this.baseUrl}/loans/${id}`, body)
  }

  getLoansStatistics() {
    return this.http.get(`${this.baseUrl}/loans`)
      .pipe(map((response: any) => {
        let statistics = JSON.parse(JSON.stringify(statisticsData))
        statistics.all.value = response.length
        const data = response.reduce(funtionsLoans.reducerStatistics, statistics)
        return Object.values(data)
      }))
  }

  postUser(body: LoanData) {
    return this.http.post(`${this.baseUrl}/loans`, body)
  }

  getLoansAumunt() {
    return this.http.get(`${this.baseUrl}/loans`)
      .pipe(map((response: any) => {
        return response.reduce(funtionsLoans.reducerAmount, {...amountCurrentData})
      }))
  }
}
