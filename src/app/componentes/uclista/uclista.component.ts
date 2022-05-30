import { Component, OnInit } from '@angular/core';
import { IUnidades } from 'src/app/models/unidades.model';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'esl-uclista',
  templateUrl: './uclista.component.html',
  styleUrls: ['./uclista.component.css']
})
export class UclistaComponent implements OnInit {

  listagemUnidades: IUnidades[] = [];

  constructor(private unidadesService: UnidadesService) { }

  ngOnInit(): void {
    this.obterUnidades()    
  }

  obterUnidades() {
    this.unidadesService
      .listeUnidades()
      .subscribe((resposta: IUnidades[]) => {
        this.listagemUnidades = resposta     
      });
  }

  removerUnidades(unidadeId: number) {
    this.unidadesService.removaUnidades(unidadeId).subscribe((resposta) => {
      this.listagemUnidades;
      this.obterUnidades()
    })
  }
}
  