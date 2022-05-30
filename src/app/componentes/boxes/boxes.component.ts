import { Component, OnInit } from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades.service';
import { IUnidades } from 'src/app/models/unidades.model';
import { GeracoesService } from 'src/app/services/geracoes.service';
import { IGeracoes } from 'src/app/models/geracoes.model';

@Component({
  selector: 'esl-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  listagemUnidades: IUnidades[] = [];
  totalUnidades:number = 0;
  totalUnidadesAtivas:number = 0;
  totalUnidadesInativas:number = 0;
  listaGeracoes:any =[];
  mediaEnergiaGerada:number = 0;

  constructor(private unidadesService: UnidadesService,
              private gerService: GeracoesService
              ) { }

  ngOnInit(): void {
    this.obterUnidadesAtual();
    this.obterGeracoes();
  }

  obterUnidadesAtual() {
    this.unidadesService
      .listeUnidades()
      .subscribe((resposta: IUnidades[]) => {
        this.listagemUnidades = resposta;
        this.totalizadorUnidades();
      });
    
  }

  totalizadorUnidades(){
    this.totalUnidades = this.listagemUnidades.length;

    for(let i=0;i<this.listagemUnidades.length;i++){
      if (this.listagemUnidades[i].ativo == true){
        this.totalUnidadesAtivas = this.totalUnidadesAtivas + 1;
      }
    }
    for(let i=0;i<this.listagemUnidades.length;i++){
      if (this.listagemUnidades[i].ativo == false){
        this.totalUnidadesInativas = this.totalUnidadesInativas + 1;
      }
    }
    
  }

  obterGeracoes(){
    this.gerService
    .listeGeracoes()
    .subscribe((resposta: IGeracoes[]) => {
      this.listaGeracoes = resposta;
      this.calcularMediaGeracoes();
    });
  }

  calcularMediaGeracoes(){

    let i:number=0;
    let kwGerados:number = 0;
    let media:number = 0;
    for(i=0;i<this.listaGeracoes.length;i++){
      kwGerados = kwGerados + Number(this.listaGeracoes[i].kwGerado)
      console.log(kwGerados);
      console.log(i);
    }
    media = Number((kwGerados/i))
    this.mediaEnergiaGerada = Number(media.toFixed()) ;
  }

}