import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions} from "chart.js";
import { GeracoesService } from 'src/app/services/geracoes.service';
import { IGeracoes } from 'src/app/models/geracoes.model';

@Component({
  selector: 'esl-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  listaGeracoes:IGeracoes[]=[];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Mai-21',
      'Jun-21',
      'Jul-21',
      'Ago-21',
      'Set-21',
      'Out-21',
      'Nov-21',
      'Dez-21',
      'Jan-22',
      'Fev-22',
      'Mar-22',
      'Abr-22',
      'Mai-22'
    ],
    datasets: [
      {
        data: [ 45, 59, 80, 81, 56, 55, 40, 90, 10, 15, 34, 40, 80 ],
        label: 'Últimos 12 meses',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgb(25,200,148)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  public lineChartPlugins = [];


  constructor(private gerService:GeracoesService) { }

  ngOnInit(): void {
  }

  obterGeracoes(){
    this.gerService
    .listeGeracoes()
    .subscribe((resposta: IGeracoes[]) => {
      this.listaGeracoes = resposta;
      // this.calcularEnergiasGeradas();
    });
  }
}