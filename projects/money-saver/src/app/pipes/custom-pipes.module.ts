import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExtPipe } from './currencyext.pipe';

@NgModule({
  declarations: [
    CurrencyExtPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyExtPipe
  ]
})
export class CustomPipesModule { }
