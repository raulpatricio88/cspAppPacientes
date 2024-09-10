import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarHoraPage } from './solicitar-hora.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarHoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarHoraPageRoutingModule {}
