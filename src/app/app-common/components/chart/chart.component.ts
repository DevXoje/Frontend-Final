import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent as ChartApexComponent } from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { ChartOptions } from '../../domain/chartOptions';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input() chartOptions?: Observable<ChartOptions>;
  @ViewChild("chart") chart?: ChartApexComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
