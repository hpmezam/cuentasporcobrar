import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { principalRoutingModule } from './principal-routing.module';
//Material

//Módulo Cuentas Bancarias
import { InicioComponent } from './pages/bancos/inicio/inicio.component';
import { AgregarComponent } from './pages/bancos/agregar/agregar.component';
import { ModificarComponent } from './pages/bancos/modificar/modificar.component';
//Módulo Clientes
import { CliiniComponent } from './pages/clientes/cliini/cliini.component';
//Módulo Cobros
import { CobiniComponent } from './pages/cobros/cobini/cobini.component';
import { CobagrComponent } from './pages/cobros/cobagr/cobagr.component';
//Módulo Deudores
import { DeuiniComponent } from './pages/deudores/deuini/deuini.component';
import { DeudetComponent } from './pages/deudores/deudet/deudet.component';
//Módulo Pagos
import { PaginiComponent } from './pages/pagos/pagini/pagini.component';

//Componentes ng-zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AudbancariaComponent } from './pages/auditorias/audbancaria/audbancaria.component';



@NgModule({
  declarations: [
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
    CliiniComponent,
    CobiniComponent,
    CobagrComponent,
    DeuiniComponent,
    DeudetComponent,
    PaginiComponent,
    AudbancariaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    principalRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzSpinModule,
    NzDividerModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
  ],
})
export class principalModule {}
