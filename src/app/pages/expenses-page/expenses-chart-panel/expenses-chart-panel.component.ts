import { Component, Input } from '@angular/core';

import { ChartData, ChartOptions } from 'chart.js';

import { Summary } from '../../../shared';

@Component({
  selector: 'app-expenses-chart-panel',
  templateUrl: './expenses-chart-panel.component.html',
  styleUrls: ['./expenses-chart-panel.component.scss']
})
export class ExpensesChartPanelComponent {
  @Input()
  summary = new Summary();

  barChartData: ChartData<'bar'> = {
    datasets: [{
      label: 'Salary',
      data: [ 10, 20, 30, 40, 40, 30, 20 ]
    }],
    labels: ['1', '2', '3', '4', '5', '6', '7']
  };

  barChartOptions: ChartOptions<'bar'> = {};
}
