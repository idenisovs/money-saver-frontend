import { Injectable } from '@angular/core';
import { BreadcrumbItem } from './BreadcrumbItem';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  nodes: BreadcrumbItem[] = [];

  constructor() { }
}
