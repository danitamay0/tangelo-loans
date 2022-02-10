import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LoanData } from '../interfaces/LoanDataInterface';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  private baseUrl = environment.baseUrl

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

        let statistics = {
          approved: {
            title: 'Prestámos por pagar 🤩', value: 0
          },
          paid: {
            title: 'Prestámos pagos 😎', value: 0
          },
          rejected: {
            title: 'Prestámos rechazados 😥', value: 0
          },
          all: {
            title: 'Solicitudes en total 🥳', value: response.length
          }
        }

        const data = response.reduce((acc: any, el: LoanData) => {
          if (el.status == 'approved') {
            acc.approved.value++
          }
          if (el.status == 'paid') {
            acc.paid.value++
          }
          if (el.status == 'rejected') {
            acc.rejected.value++
          }
          return { ...acc }
        }, statistics)
        
        return Object.values(data)
      }))
  }
  
  postUser(body: LoanData) {
    return this.http.post(`${this.baseUrl}/loans`, body)
  }
}
