import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DonutChartService } from '../../../../core/services/nutrition/donut-chart.service';
import { ChartOptions, ChartType } from 'chart.js';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  data = {} as any;
  chart?: Chart;

  constructor(
    private serviceDonutChart: DonutChartService,
    private elementRef: ElementRef) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.serviceDonutChart.getData().subscribe(data => {
      this.data = data;
      this.createChart()
    });
  }

  createChart() {
    /* istanbul ignore next */
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.elementRef.nativeElement.querySelector('canvas'), {
      type: 'doughnut' as ChartType,
      data: {
        labels: this.data.labels,
        datasets: [{
          data: this.calculatePercentageCalories(),
          backgroundColor: [
            '#6fc36f',
            '#8080ff'
          ],
          hoverBackgroundColor: ['#ddd', '#ddd'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              fontColor: 'white'
            }
          }
        }
      } as ChartOptions
    });
  }

  calculatePercentageCalories() {
    let porcentaje = (this.data.data[1] / this.data.data[0]) * 100;
    return [porcentaje, 100 - porcentaje];
  }
}
