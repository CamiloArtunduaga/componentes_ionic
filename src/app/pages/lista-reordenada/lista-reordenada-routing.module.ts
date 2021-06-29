import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReordenadaPage } from './lista-reordenada.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReordenadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReordenadaPageRoutingModule {}
