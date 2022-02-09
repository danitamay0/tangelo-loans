import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private _sidenav : SidenavService) { }

  ngOnInit(): void {
  }

  toggle(){
    this._sidenav.toggle()
  }
}
