import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.sass']
})
export class ApplyLoanComponent implements OnInit {
  minQuota = 10000
  maxQuota = 100000

  constructor(
 
  ) { }

  ngOnInit(): void {
   
  }

  
}
