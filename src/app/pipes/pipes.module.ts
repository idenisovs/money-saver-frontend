import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeilPipe } from './ceil.pipe';
import { FloorPipe } from './floor.pipe';

@NgModule({
  declarations: [
    CeilPipe, FloorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeilPipe, FloorPipe
  ]
})
export class PipesModule { }
