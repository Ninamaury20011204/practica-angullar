import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interface/deportes';

@Injectable({
  providedIn: 'root'
})
export class DeportesService {

  private urlGeneral: string = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Ecuador';

  constructor(
    private http: HttpClient
  ) { }


  getEquipos(): Observable<Team[]>{
    return this.http.get<Team[]>(this.urlGeneral);
  }

  getEquiposByNacion(nacion: string): Observable<Team[]>{
    return this.http.get<Team[]>(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=${nacion}`);
  }

  getEquipoByName(nombre: string): Observable<Team[]>{
    return this.http.get<Team[]>(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${nombre}`);
  }

}
