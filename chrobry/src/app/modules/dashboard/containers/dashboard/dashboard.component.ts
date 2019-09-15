import { Component } from '@angular/core';

import { IUser } from '@app/interfaces/user.interface';
import { RoutingAppPages } from '@app/config/routing';
import { UserService } from '@app/modules/shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user: IUser;
  RoutingAppPages: typeof RoutingAppPages = RoutingAppPages;

  constructor(private userService: UserService) {
    this.user = this.userService.user;
  }


}
