import { Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions } from 'chart.js';

import { Summary } from '../../../shared';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-expenses-chart-panel',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [DatePipe],
  templateUrl: './expenses-chart-panel.component.html',
  styleUrl: './expenses-chart-panel.component.scss'
})
export class ExpensesChartPanelComponent implements OnInit {
  labels: string[] = [];

  expectedResidualsDataset: ChartDataset = {
    type: 'line',
    label: 'Expected',
    data: [],
    backgroundColor: 'orange',
    borderColor: 'orange',
    pointRadius: 0
  };

  actualResidualsDataset: ChartDataset = {
    type: 'bar',
    label: 'Actual',
    data: [],
    backgroundColor: '#4285f4',
    borderColor: '#4285f4',
  };

  barChartData: ChartDataset[] = [
    this.expectedResidualsDataset,
    this.actualResidualsDataset
  ];

  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'index'
      }
    },
    scales: {
      x: {
        display: false
      }
    },
  };

  @Input()
  summary!: Summary;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    for (let expenses of this.summary.dailyExpenses) {
      this.expectedResidualsDataset.data.push(expenses.residual.planned);
      this.actualResidualsDataset.data.push(expenses.residual.real);

      const date = this.datePipe.transform(expenses.date, 'dd.MM.yyyy.') as string;
      this.labels.push(date);
    }
  }
}

