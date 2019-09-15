import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { listAnimation } from '@app/animations/list.animation';
import { UserService } from '@app/modules/shared/services/user.service';
import { IUser } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [listAnimation],

})
export class ShopComponent implements OnInit {

  user: IUser;

  itemList = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private userService: UserService
  ) {
    this.user = this.userService.user;
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
