import { Component, OnInit } from '@angular/core';

interface Usuario {
  img: string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  usuario: Usuario[] = [
    {
      img:"assets/stan-lee.jpg"
    },
    {
      img: "assets/wason.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }



}
