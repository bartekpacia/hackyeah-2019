import { Component, OnInit } from '@angular/core';

import { IUser } from '@app/interfaces/user.interface';
import { RoutingAppPages } from '@app/config/routing';
import { UserService } from '@app/modules/shared/services/user.service';
import { Router } from '@angular/router';
import { DB } from '@app/app.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: IUser;
  RoutingAppPages: typeof RoutingAppPages = RoutingAppPages;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.user;

    DB.collection('USERS')
      .onSnapshot((data) => {
        data.forEach((item) => {
          if (this.userService.user.currentUser.email === item.data().email) {
            this.userService.user.currentUser = { ...this.userService.user.currentUser, ...(item.data() as any) };
          }
        });
      });

  }

  navigateToBadges(): void {
    this.router.navigate([RoutingAppPages.Trophies]);
  }

}
