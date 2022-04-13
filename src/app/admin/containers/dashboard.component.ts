import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <app-table-products></app-table-products>
  <app-chart-products></app-chart-products>
  <app-table-users></app-table-users>
  `
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
