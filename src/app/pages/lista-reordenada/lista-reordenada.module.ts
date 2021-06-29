import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReordenadaPageRoutingModule } from './lista-reordenada-routing.module';

import { ListaReordenadaPage } from './lista-reordenada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReordenadaPageRoutingModule
  ],
  declarations: [ListaReordenadaPage]
})
export class ListaReordenadaPageModule {}
