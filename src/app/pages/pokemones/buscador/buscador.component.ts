import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Output() evenePokemon = new EventEmitter<string>();

  

  buscarPokemon(pokemon: string) {
    this.evenePokemon.emit(pokemon);
  }
}
