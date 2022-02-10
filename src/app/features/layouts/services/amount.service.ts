import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmountService {
  updateData : EventEmitter<any> = new EventEmitter()

  constructor() { }
}
