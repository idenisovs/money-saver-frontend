import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Navbar } from '@components/navbar/navbar';

@Component({
  selector: 'app-dashboard-view',
  imports: [Navbar],
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardView {}
