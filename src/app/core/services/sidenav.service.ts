import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sideNavSubject: Subject<any> = new Subject();
  public sideNav$ = this.sideNavSubject.asObservable()

  constructor() { } 
 
  public toggle() {
    return this.sideNavSubject.next(null);
  } 

}

