import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Módulo Cuentas Bancarias
import { InicioComponent } from './pages/bancos/inicio/inicio.component';
import { ModificarComponent } from './pages/bancos/modificar/modificar.component';
import { AgregarComponent } from './pages/bancos/agregar/agregar.component';
//Módulo Clientes
import { CliiniComponent } from './pages/clientes/cliini/cliini.component';
//Módulo Cobros
import { CobiniComponent } from './pages/cobros/cobini/cobini.component';
import { CobagrComponent } from './pages/cobros/cobagr/cobagr.component';
//Módulo Deudores
import { DeuiniComponent } from './pages/deudores/deuini/deuini.component';
import { PaginiComponent } from './pages/pagos/pagini/pagini.component';
import { AudbancariaComponent } from './pages/auditorias/audbancaria/audbancaria.component';

const rutas: Routes = [
  {
    path: '',
    children: [
      { path: 'ban/inicio', component: InicioComponent },
      { path: 'ban/modificar/:id', component: ModificarComponent },
      { path: 'ban/agregar', component: AgregarComponent },
      { path: 'cli/inicio', component: CliiniComponent },
      { path: 'cob/inicio', component: CobiniComponent },
      { path: 'cob/agregar', component: CobagrComponent },
      { path: 'deu/inicio', component: DeuiniComponent },
      { path: 'pag/inicio', component: PaginiComponent },
      { path: 'aud/bancaria', component: AudbancariaComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class principalRoutingModule {}
