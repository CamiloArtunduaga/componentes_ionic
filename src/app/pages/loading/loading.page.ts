import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading : HTMLIonLoadingElement;

  constructor( public loaadingCtrl: LoadingController ) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loaadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();

    }, 2000);
    
  }

}
