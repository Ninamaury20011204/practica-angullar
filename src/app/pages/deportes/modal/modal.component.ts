import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { Team } from '../interface/deportes';
import { DeportesService } from '../services/deportes.service';
import { isPlatformBrowser, NgFor } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent  {
  @Input() equipo:Team = {} as Team; 
  
  
  private bootstrapModal: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }
  
  @ViewChild('modal') public modal!:ElementRef;

  
  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)){
      this.inicializarmodal();
    }
  }

  inicializarmodal(){
    import('bootstrap').then((bootstrap) => {
      this.bootstrapModal = new bootstrap.Modal(this.modal.nativeElement)
    });
  }

  
  openModal(eq:Team) {
    this.equipo = eq;
    if (isPlatformBrowser(this.platformId)) {
      if (this.bootstrapModal) {
        this.bootstrapModal.show();
      }else{
        this.inicializarmodal();
        setTimeout(() => {
          this.bootstrapModal.show();
        }, 0);
      }
    }
  }
}
