import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingGamesPages } from '@app/config/routing';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent {
  RoutingGamesPages: typeof RoutingGamesPages = RoutingGamesPages;
}
