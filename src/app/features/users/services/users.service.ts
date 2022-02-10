import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/UserInteface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  getUsers(params = {}) {
    return this.http.get(`${this.baseUrl}/users`, {
      params: params,
      observe: 'response'
    })
  }

  putUser(id: number, body: User) {
    return this.http.put(`${this.baseUrl}/users/${id}`, body)
  }

  postUser(body: User) {
    return this.http.post(`${this.baseUrl}/users`, body)
  }
}
