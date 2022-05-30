import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { IUnidades } from 'src/app/models/unidades.model';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'esl-fucc',
  templateUrl: './fucc.component.html',
  styleUrls: ['./fucc.component.css']
})
export class FuccComponent implements OnInit {

  listagemUnidades: IUnidades[]=[];
  unidade:any ={};

  constructor(private cadUnidades:UnidadesService, private router: Router) { }

  ngOnInit(): void {
    this.unidade={};
  }

  inserirUnidades(uni:Form){
    if(this.unidade.ativo!=true){
      this.unidade.ativo=false;
    }
    this.cadUnidades.insiraUnidades(this.unidade).subscribe(resposta=>{
      this.listagemUnidades.push(resposta);
      this.router.navigateByUrl('/unidades-consumidoras');
    })
  }
}
