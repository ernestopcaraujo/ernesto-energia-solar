import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { HeadDashComponent } from './componentes/headers/head-dash/head-dash.component';
import { HeadUclComponent } from './componentes/headers/head-ucl/head-ucl.component';
import { HeadUccComponent } from './componentes/headers/head-ucc/head-ucc.component';
import { HeadEconsComponent } from './componentes/headers/head-econs/head-econs.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UclComponent } from './pages/ucl/ucl.component';
import { UccComponent } from './pages/ucc/ucc.component';
import { EconComponent } from './pages/econ/econ.component';
import { BoxesComponent } from './componentes/boxes/boxes.component';
import { GraficoComponent } from './componentes/grafico/grafico.component';
import { UclistaComponent } from './componentes/uclista/uclista.component';
import { FuccComponent } from './componentes/fucc/fucc.component';
import { FeconComponent } from './componentes/fecon/fecon.component';
import { AppRoutingModule } from './app-routing.moldule';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route, ROUTES } from '@angular/router';
import { FupdateComponent } from './componentes/fupdate/fupdate.component';
import { UpdateComponent } from './pages/update/update.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadDashComponent,
    HeadUclComponent,
    HeadUccComponent,
    HeadEconsComponent,
    LoginComponent,
    DashboardComponent,
    UclComponent,
    UccComponent,
    EconComponent,
    BoxesComponent,
    GraficoComponent,
    UclistaComponent,
    FuccComponent,
    FeconComponent,
    FupdateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
