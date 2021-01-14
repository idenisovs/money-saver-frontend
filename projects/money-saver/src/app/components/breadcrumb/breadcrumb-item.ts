export class BreadcrumbItem {
  label: string;
  link?: string;
  active = false;

  constructor(label: string, link?: string) {
    this.label = label;
    this.link = link;
  }
}
