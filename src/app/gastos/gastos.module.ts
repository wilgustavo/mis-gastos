import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaGastosComponent } from './lista-gastos/lista-gastos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaGastosComponent],
  exports: [ListaGastosComponent]
})
export class GastosModule { }
