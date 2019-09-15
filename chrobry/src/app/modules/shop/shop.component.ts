import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { listAnimation } from '@app/animations/list.animation';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [listAnimation],

})
export class ShopComponent implements OnInit {


  itemList = [];

  constructor(private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {

    setTimeout(() => {
      this.itemList = [
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
        {
          label: 'soup',
          points: '2000',
          image: 'soup'
        },
      ];

      this.cdr.detectChanges();
    });
  }
}
