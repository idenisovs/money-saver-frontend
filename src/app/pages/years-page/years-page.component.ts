import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../components/breadcrumb/breadcrumb.service';
import { BreadcrumbItem } from '../../components/breadcrumb/BreadcrumbItem';

@Component({
  selector: 'app-years-page',
  templateUrl: './years-page.component.html',
  styleUrls: ['./years-page.component.scss']
})
export class YearsPageComponent implements OnInit {
  constructor(private breadcrumb: BreadcrumbService) {}

  ngOnInit() {
    const yearsBreadcrumbNode = new BreadcrumbItem('All');
    yearsBreadcrumbNode.active = true;
    this.breadcrumb.nodes = [ yearsBreadcrumbNode ];
  }

}
