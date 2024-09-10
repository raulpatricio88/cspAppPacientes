import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarHoraPageRoutingModule } from './solicitar-hora-routing.module';

import { SolicitarHoraPage } from './solicitar-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarHoraPageRoutingModule
  ],
  declarations: [SolicitarHoraPage]
})
export class SolicitarHoraPageModule {}
