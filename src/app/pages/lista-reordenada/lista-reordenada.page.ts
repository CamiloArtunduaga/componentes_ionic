import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-lista-reordenada',
  templateUrl: './lista-reordenada.page.html',
  styleUrls: ['./lista-reordenada.page.scss'],
})
export class ListaReordenadaPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  

  personajes : string[] = [ 'Aquaman', 'Super man', 'Batman', 'Mujer Maravilla' ];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    console.log(event);

    const itemMover = this.personajes.splice(event.detail.from, 1 )[0];
    this.personajes.splice( event.detail.to, 0, itemMover );

    event.detail.complete();

    console.log(this.personajes);
    // this.personajes = event.detail.complete(this.personajes);
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}
