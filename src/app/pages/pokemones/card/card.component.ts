import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Pokemon, Pokemones } from '../interfaces/pokemones';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'pokemon-card',
  imports: [NgIf, NgFor, ModalComponent], 
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnChanges {
  @Input() public pokemonsAll: Pokemones | undefined;

  @ViewChild(ModalComponent) public modal !: ModalComponent;

  openModal(pokemon: Pokemon) {
    if(this.modal){
      this.modal.openModal(pokemon)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonsAll']) {
      
    }
  }
}
