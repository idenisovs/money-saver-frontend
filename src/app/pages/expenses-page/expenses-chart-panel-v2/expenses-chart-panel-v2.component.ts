import { Component, Input } from '@angular/core';
import { Summary } from '../../../shared';

@Component({
  selector: 'app-expenses-chart-panel-v2',
  standalone: true,
  imports: [],
  templateUrl: './expenses-chart-panel-v2.component.html',
  styleUrl: './expenses-chart-panel-v2.component.scss'
})
export class ExpensesChartPanelV2Component {
  @Input()
  summary!: Summary;
}

