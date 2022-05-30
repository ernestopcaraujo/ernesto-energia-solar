import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IGeracoes } from '../models/geracoes.model';

@Injectable({
  providedIn: 'root'
})
export class GeracoesService {

  constructor(private http: HttpClient) { }

  listeGeracoes():Observable<IGeracoes[]>{
    return this.http.get<IGeracoes[]>("http://localhost:3000/geracoes");
  }

  insiraGeracoes(geracao:IGeracoes):Observable<IGeracoes>{
    return this.http.post<IGeracoes>("http://localhost:3000/geracoes", geracao);    
  }



}
