import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Day } from '../../../shared/Day';

@Component({
  selector: 'app-expenses-graph',
  templateUrl: './expenses-graph.component.html',
  styleUrls: ['./expenses-graph.component.scss']
})
export class ExpensesGraphComponent implements OnInit, OnChanges {

  @Input()
  expenses: Day[] = [];

  barChartType: ChartType = 'bar';
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.populateDataSets();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDataSets();
  }

  populateDataSets() {
    this.barChartLabels = this.expenses.map((record) => this.getDateString(record.date));

    this.barChartData = [
      this.makePlannedBalanceDataSet(),
      this.makeActualBalanceDataSet()
    ];
  }

  makePlannedBalanceDataSet(): ChartDataSets {
    return {
      data: this.expenses.map(record => this.round(record.residual.planned)),
      label: 'Planned',
      type: 'line',
      backgroundColor: 'rgba(0, 0, 0, 0)'
    };
  }

  makeActualBalanceDataSet(): ChartDataSets {
    return {
      data: this.expenses.map(record => this.round(record.residual.real)),
      label: 'Actual',
      backgroundColor: '#007bff'
    };
  }

  updateDataSets() {
    if (!this.barChartData.length) {
      return;
    }

    const [ plannedBalance, actualBalance ] = this.barChartData;

    plannedBalance.data = this.expenses.map(record => this.round(record.residual.planned));
    actualBalance.data = this.expenses.map(record => this.round(record.residual.real));

    this.barChartLabels = this.expenses.map((record) => this.getDateString(record.date));
  }

  getDateString(date: Date): string {
    const result: string[] = [
      date.getFullYear().toString()
    ];

    const month = date.getMonth() + 1;

    if (month < 10) {
      result.push(`0${month}`);
    } else {
      result.push(month.toString());
    }

    const day = date.getDate();

    if (day < 10) {
      result.push(`0${day}`);
    } else {
      result.push(day.toString());
    }

    return result.join('-');
  }

  round(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
