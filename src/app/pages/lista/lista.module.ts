import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { ComponentsModule } from '../../components/components.module';
import { DataService } from 'src/app/services/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
