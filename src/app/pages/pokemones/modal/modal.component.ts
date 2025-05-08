import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { Pokemon } from '../interfaces/pokemones';
import { isPlatformBrowser, NgFor } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() pokemon: Pokemon = {
    name: '',
    height: 0,
    weight: 0,
    base_experience: 0,
    sprites: {
      front_default: '',
      versions: {
        'generation-v': {
          'black-white': {
            front_default: ''
          }
        }
      }
    },
    abilities: [],
    types: [],
    stats: [],
    moves: [],
    species: {
      name: ''
    }
  } as unknown as Pokemon;
  

  private bootstrapModal: any;
  @ViewChild('modal') public elemntRef!: ElementRef;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)){
      this.inicializeModal();
    }
  }

  inicializeModal() {
    import('bootstrap').then(({ Modal }) => {
      this.bootstrapModal = new Modal(this.elemntRef.nativeElement);
    });
  };

  openModal(pokemon:Pokemon) {
    this.pokemon = pokemon;
    if (isPlatformBrowser(this.platformId)) {
      if(this.bootstrapModal) {
        this.bootstrapModal.show();
      }else {
        this.inicializeModal();
        setTimeout(() => {
          this.bootstrapModal.show();
        }, 0);
      }
    }
  }
}
