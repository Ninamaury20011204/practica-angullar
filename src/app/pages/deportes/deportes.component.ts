import { Component } from '@angular/core';
import { Team } from './interface/deportes';
import { DeportesService } from './services/deportes.service';
import { CardComponent } from "./card/card.component";
import { PaginacionComponent } from "./paginacion/paginacion.component";
import { BuscarComponent } from "./buscar/buscar.component";
import { forkJoin, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-deportes',
  imports: [CardComponent, PaginacionComponent, BuscarComponent],
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css'
})
export class DeportesComponent {
  equipos: Team[] = [];

  constructor(
    private _srvDeportes: DeportesService
  ) { }

  ngOnInit() {
    this._srvDeportes.getEquipos().subscribe((data: any) => {
      this.equipos = data.teams;
    });
  }


  setnewEquipos(equiposNews: string): void {
    this._srvDeportes.getEquiposByNacion(equiposNews).subscribe((data: any) => {
      this.equipos = data.teams;
    });
  }



  equiposEncontrados(valor: string): void {
    if (valor) {
      this._srvDeportes.getEquipoByName(valor).subscribe((data: any) => {
        if (data.teams && data.teams.length > 0) {
          this.equipos = data.teams;
        } else {
          this.ngOnInit();
        }
      });
    } else {
      this.ngOnInit();
    }
  }
} 

