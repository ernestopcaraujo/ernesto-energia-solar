import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUnidades } from '../models/unidades.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor(private http: HttpClient) { }

  listeUnidades():Observable<IUnidades[]>{
    return this.http.get<IUnidades[]>("http://localhost:3000/unidades");
  }

  listeUnidadesUpdate(unidadeId:any):Observable<any>{
    return this.http.get<any>("http://localhost:3000/unidades"+"/"+unidadeId);
  }

  insiraUnidades(unidade:IUnidades):Observable<IUnidades>{
    return this.http.post<IUnidades>("http://localhost:3000/unidades", unidade);    
  }

  removaUnidades(unidadeId:number):Observable<number>{
      let httpheaders = new HttpHeaders()
      .set('Content-type','application/Json');
        let options = {headers:httpheaders};
          return this.http.delete<number>("http://localhost:3000/unidades"+"/"+unidadeId);
    }
  
  atualizeUnidades(unidadeId:number,unidadeAtualizada:any):Observable<any>{
    return this.http.put<any>("http://localhost:3000/unidades"+"/"+unidadeId, unidadeAtualizada);    
  }

}