import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  chartOptions: Highcharts.Options = { };
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  constructor() { }

  ngOnInit() {
  }

}
