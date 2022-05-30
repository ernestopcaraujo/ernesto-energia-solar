import { Component, OnInit } from '@angular/core';
import { IUnidades } from 'src/app/models/unidades.model';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'esl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listagemUnidades: IUnidades[] = [];
 
  constructor(private unidadesService: UnidadesService) { }

  ngOnInit(): void {

  }

}
