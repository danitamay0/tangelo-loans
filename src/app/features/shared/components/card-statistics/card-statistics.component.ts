import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.sass']
})
export class CardStatisticsComponent implements OnInit {
  @Input('title') title:string
  @Input('value') value:number
  constructor() { }

  ngOnInit(): void {
  }

}
