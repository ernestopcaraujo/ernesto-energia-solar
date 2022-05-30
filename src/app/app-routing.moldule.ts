import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UclComponent } from './pages/ucl/ucl.component';
import { EconComponent } from './pages/econ/econ.component';
import { UccComponent } from './pages/ucc/ucc.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes=[
    {path:'', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'unidades-consumidoras', component: UclComponent},
    {path:'unidades-consumidoras-cadastro', component: UccComponent},
    {path:'energia-gerada', component: EconComponent},
    {path: 'unidades-update/:id', component: UpdateComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

