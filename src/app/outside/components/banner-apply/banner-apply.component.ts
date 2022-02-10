import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-apply',
  templateUrl: './banner-apply.component.html',
  styleUrls: ['./banner-apply.component.sass']
})
export class BannerApplyComponent implements OnInit {
  @Input('minQuota') minQuota :number
  @Input('maxQuota') maxQuota :number

  constructor() { }

  ngOnInit(): void {
  }

}
