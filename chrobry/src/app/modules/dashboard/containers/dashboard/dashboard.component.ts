import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '@app/interfaces/user.interface';
import { RoutingAppPages } from '@app/config/routing';
import { UserService } from '@app/modules/shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: IUser;
  RoutingAppPages: typeof RoutingAppPages = RoutingAppPages;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

}
