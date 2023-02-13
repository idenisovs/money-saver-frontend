import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ChartData, ChartOptions } from 'chart.js';

import { Summary } from '../../../shared';

@Component({
  selector: 'app-expenses-chart-panel',
  templateUrl: './expenses-chart-panel.component.html',
  styleUrls: ['./expenses-chart-panel.component.scss'],
  providers: [DatePipe]
})
export class ExpensesChartPanelComponent implements OnInit {
  @Input()
  summary = new Summary();

  barChartData: ChartData<'bar'|'line'> = {
    datasets: [{
      type: 'line',
      label: 'Planned',
      data: [],
      backgroundColor: 'orange',
      borderColor: 'orange',
      pointRadius: 0
    }, {
      type: 'bar',
      label: 'Real',
      data: [],
      backgroundColor: '#4285f4',
      borderColor: '#4285f4'
    }],
    labels: []
  };

  barChartOptions: ChartOptions<'bar'|'line'> = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      }
    }
  };

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    for (let expenses of this.summary.dailyExpenses) {
      this.barChartData.datasets[0].data.push(expenses.residual.planned);
      this.barChartData.datasets[1].data.push(expenses.residual.real);

      const date = this.datePipe.transform(expenses.date, 'dd.MM.yyyy.');

      this.barChartData.labels?.push(date);
    }
  }
}
