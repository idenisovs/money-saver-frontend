import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[autoselect]'
})
export class AutoselectDirective implements OnInit {

  constructor(private el: ElementRef<HTMLInputElement>) { }

  ngOnInit() {
    this.el.nativeElement.focus();
  }

}
