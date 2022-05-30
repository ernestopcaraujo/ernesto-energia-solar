import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { IUnidades } from 'src/app/models/unidades.model';
import { UnidadesService } from 'src/app/services/unidades.service';
import { IGeracoes } from '../../models/geracoes.model';
import { GeracoesService } from 'src/app/services/geracoes.service';



@Component({
  selector: 'esl-fecon',
  templateUrl: './fecon.component.html',
  styleUrls: ['./fecon.component.css']
})
export class FeconComponent implements OnInit {

  geracao:any={};
  listagemUnidades:IUnidades[] = [];
  listaUnidadesAtivas:any = [];
  listaGeracoes:any = [];

  constructor(private unidadesService:UnidadesService, 
              private gerService:GeracoesService, 
              private router: Router) { }

  ngOnInit(): void {
    this.obterUnidades();
    this.geracao={};
  }

 //---------------------- LISTAR UNIDADES ATIVAS NO TEMPLATE DO FORMULÁRIO FECON ---------------->
  obterUnidades() {
    this.unidadesService
      .listeUnidades()
      .subscribe((resposta: IUnidades[]) => {
        this.listagemUnidades = resposta;
        this.listarUnidadesAtivas()
      });
  }
  listarUnidadesAtivas(){
    
    for(let i=0;i<this.listagemUnidades.length;i++){
      if (this.listagemUnidades[i].ativo == true){
        this.listaUnidadesAtivas.push(this.listagemUnidades[i].apelido)
      }
    }    
  }
//################################################################################################
  
  obterGeracoes(){
    this.gerService
    .listeGeracoes()
    .subscribe((resposta: IGeracoes[]) => {
      this.listaGeracoes = resposta;
    });

  }

  
  inserirGeracoes(ger:Form){
    this.gerService.insiraGeracoes(this.geracao).subscribe(resposta=>{
      this.listaGeracoes.push(resposta);
      this.router.navigateByUrl('/dashboard');
    })
  }

}
