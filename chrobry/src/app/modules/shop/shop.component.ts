import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  itemList = [
    {
      label: 'hamburger',
      points: '2000',
      image: 'hamburger'
    },
    {
      label: 'fries',
      points: '2000',
      image: 'fries'
    },
    {
      label: 'coffee',
      points: '2000',
      image: 'coffee'
    },
    {
      label: 'chicken',
      points: '2000',
      image: 'chicken'
    },
  ];

}
