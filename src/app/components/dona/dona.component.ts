import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Título'
  @Input() labels: string[] = [];
  @Input() data: number[] = [];

  public doughnutChartData!: ChartData<'doughnut'>;

  ngOnInit(): void {
     this.doughnutChartData = {
      labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: ['#6857E6', '#009FEE', '#F02059']
          },
        ],
  };
  }
  // Doughnut

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
