import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements OnInit {

  lista;

  constructor() { }

  ngOnInit() {
    this.llenarLista();
  }

  private llenarLista() {
    this.lista = [
      {
        id: 1,
        categoria: 'Transporte',
        importe: 321.98,
        fecha: '2018-03-19'
      },
      {
        id: 2,
        categoria: 'Salud',
        importe: 1140.55,
        fecha: '2018-02-08'
      },
      {
        id: 3,
        categoria: 'Alimentación',
        importe: 705.22,
        fecha: '2018-03-18'
      }
    ];
  }

}
