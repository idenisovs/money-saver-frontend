import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExt'
})
export class CurrencyExtPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const val = (Math.round(value * 100) / 100).toFixed(2);

    return `${val} €`;
  }

}
