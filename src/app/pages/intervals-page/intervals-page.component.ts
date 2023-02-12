import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../components/breadcrumb/breadcrumb.service';
import { BreadcrumbItem } from '../../components/breadcrumb/BreadcrumbItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intervals-page',
  templateUrl: './intervals-page.component.html',
  styleUrls: ['./intervals-page.component.scss']
})
export class IntervalsPageComponent implements OnInit {
  constructor(
    public breadcrumb: BreadcrumbService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.breadcrumb.nodes = [
      new BreadcrumbItem('All', '/years')
    ];

    this.route.params.subscribe((params) => {
      const yearBreadcrumbNode = new BreadcrumbItem(params['year']);
      yearBreadcrumbNode.active = true;
      this.breadcrumb.nodes.push(yearBreadcrumbNode);
    });
  }
}
