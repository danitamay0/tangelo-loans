import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {  Subscription } from 'rxjs';
import { SidenavService } from 'src/app/features/shared/services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  sideNav$: Subscription

  constructor(private _sidenav: SidenavService) { }

  ngOnInit(): void {
    this.sideNav$ = this._sidenav.sideNav$
      .subscribe(() => this.sidenav.toggle());
  }

  toggle(){
    this._sidenav.toggle()
  }

  ngOnDestroy(): void {
    this.sideNav$.unsubscribe()
  }
}
