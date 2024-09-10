import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-pacientes',
    loadChildren: () => import('./pages/registro-pacientes/registro-pacientes.module').then( m => m.RegistroPacientesPageModule)
  },
  {
    path: 'solicitar-hora',
    loadChildren: () => import('./pages/solicitar-hora/solicitar-hora.module').then( m => m.SolicitarHoraPageModule)
  },
  {
    path: 'confirmar-cita',
    loadChildren: () => import('./pages/confirmar-cita/confirmar-cita.module').then( m => m.ConfirmarCitaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
