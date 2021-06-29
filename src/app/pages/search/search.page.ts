import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any [] = [];
  textoBuscar: string = '';

  constructor( public dataService_: DataService ) { }

  ngOnInit() {
    this.dataService_.getBusqueda().subscribe( albumes => {
    this.albumes = albumes;
    });
  }

  onSearch(event) {
    console.log(event);
    this.textoBuscar = event.detail.value;
    
  }

}
