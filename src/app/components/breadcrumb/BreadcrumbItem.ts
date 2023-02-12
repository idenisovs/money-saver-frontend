export class BreadcrumbItem {
  label: string|number;
  link?: string;
  active = false;

  constructor(label: string, link?: string) {
    this.label = label;
    this.link = link;
  }
}
