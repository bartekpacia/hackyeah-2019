import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingGamesPages } from '@app/config/routing';
import { UserService } from '@app/modules/shared/services/user.service';
import { IUser } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent {
  RoutingGamesPages: typeof RoutingGamesPages = RoutingGamesPages;
  user: IUser;

  constructor(private userService: UserService) {
    this.user = this.userService.user;

  }
}
