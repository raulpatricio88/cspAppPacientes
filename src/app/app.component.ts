import { Component } from '@angular/core';

interface Opciones {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opciones[]=[
    {
      icon: 'home',
      name: 'Home',
      redirectTo: '/inicio'
    },
    {
      icon: 'book',
      name: 'Registro de Pacientes',
      redirectTo: '/registro-pacientes'
    },
    {
      icon: 'calendar-number',
      name: 'Reservar hora',
      redirectTo: '/solicitar-hora'
    },
    {
      icon: 'checkbox',
      name: 'Confirmar hora',
      redirectTo: '/confirmar-cita'
    },
    {
      icon: 'power',
      name: 'Cerrar Sesión',
      redirectTo: '/login'
    },
    
  ]
  constructor() {}
}
