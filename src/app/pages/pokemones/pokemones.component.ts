import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Pokemones } from './interfaces/pokemones';
import { PokemonService } from './services/pokemon.service';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { BuscadorComponent } from "./buscador/buscador.component";

@Component({
  selector: 'app-pokemones',
  imports: [CardComponent, PaginacionComponent, BuscadorComponent],
  templateUrl: './pokemones.component.html',
  styleUrl: './pokemones.component.css',
})
export class PokemonesComponent implements OnInit {
  pokemons: Pokemones | undefined;

  constructor(private _srvPokemon: PokemonService) {}

  ngOnInit(): void {
    this._srvPokemon.getPokemones().subscribe((pokemonesAll) => {
      pokemonesAll.results.forEach((pokemon) => {
        this._srvPokemon.getPokemon(pokemon.name).subscribe((pokemonData) => {
          pokemon.data = pokemonData;
          this._srvPokemon.nextURL = pokemonesAll.next;
          this._srvPokemon.previousURL = pokemonesAll.previous;
        });
      });
      this.pokemons = pokemonesAll;
    });
  }

  setNewPokemons(pokemonsNews: Pokemones): void {
    this.pokemons = pokemonsNews;
  }


  buscarPokemon(pokemon: string): void {
    if(pokemon){

      this._srvPokemon.getPokemon(pokemon).subscribe((pokemonData) => {
        this.pokemons = {
          count: 1,
          next: null,
          previous: null,
          results: [{
            name: pokemonData.name,
            url: '',
            data: pokemonData
          }],
        };
        this._srvPokemon.nextURL = null;
        this._srvPokemon.previousURL = null;
      });
    }else{
      this.ngOnInit();
    }
  }
}
