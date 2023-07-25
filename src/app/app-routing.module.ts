import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';

const routes: Routes = [
  { path: '', redirectTo: '/sinsesion/login', pathMatch: 'full' },
  {
    path: 'sinsesion',
    component: SesionComponent,
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'sesion',
    component: ContenidoComponent,
    loadChildren: () =>
      import('./modules/principal/principal.module').then(
        (m) => m.principalModule
      ),
  },
  { path: '**', redirectTo: '/sinsesion/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
