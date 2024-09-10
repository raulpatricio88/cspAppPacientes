import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPacientesPageRoutingModule } from './registro-pacientes-routing.module';

import { RegistroPacientesPage } from './registro-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPacientesPageRoutingModule
  ],
  declarations: [RegistroPacientesPage]
})
export class RegistroPacientesPageModule {}
