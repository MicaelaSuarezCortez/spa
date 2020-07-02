import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  // heroe: any = {};

  @Input() heroe: any = {};
  @Input() id: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() {
                this.heroeSeleccionado = new EventEmitter();
              }

  ngOnInit(): void {

  }

  verHeroe() {
  this.heroeSeleccionado.emit(this.id);
  }
}
