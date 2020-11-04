import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Tower } from 'src/app/interfaces/model-interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public selfTower: Tower;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [ ];

  public barChartLabels: Label[] = ['floors', 'feet', 'meter'];
  @Input() set tower(payload: Tower) {
    if (payload) {
      this.barChartData = [
        { data: [payload.floors, payload.feet, payload.meter], label: payload.name}
      ];
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
