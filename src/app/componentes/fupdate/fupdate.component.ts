import { Component, OnInit } from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades.service';
import { IUnidades } from 'src/app/models/unidades.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'esl-fupdate',
  templateUrl: './fupdate.component.html',
  styleUrls: ['./fupdate.component.css']
})
export class FupdateComponent implements OnInit {

  id = this.rotaAtiva.snapshot.params['id'];
  listaEdit: IUnidades[]=[];
  unidade:any ={};

  constructor(private unidadesService:UnidadesService, private rotaAtiva:ActivatedRoute, private roteador:Router) { }


  ngOnInit(): void {
    this.unidadesService.listeUnidadesUpdate(this.id)
      .subscribe((un:any)=>{this.unidade = un;})
  }

  
  atualizarUnidades(unidade:any) {
      this.unidadesService.atualizeUnidades(this.id, this.unidade)
      .subscribe((data:any) => {this.roteador.navigateByUrl('/unidades-consumidoras')})
  }

}
