import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { Team } from '../interface/deportes';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  imports: [NgFor, NgIf, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() equipos: Team[] = [];

  @ViewChild(ModalComponent) modal!: ModalComponent;

  openModal(equipo: Team) {
    if (this.modal) {
      this.modal.openModal(equipo);
    }
  }
}
