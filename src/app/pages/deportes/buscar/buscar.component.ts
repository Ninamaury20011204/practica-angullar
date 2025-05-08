import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../interface/deportes';
import { NgFor } from '@angular/common';
import { DeportesService } from '../services/deportes.service';

@Component({
  selector: 'app-buscar',
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  @Output() eventEquipo = new EventEmitter<string>();


  constructor(
    private deportesService: DeportesService
  ) { }

  equipoEncontrado(nombre: string) {
    this.eventEquipo.emit(nombre);
  }
}
