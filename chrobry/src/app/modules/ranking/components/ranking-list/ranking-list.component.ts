import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { listAnimation } from '@app/animations/list.animation';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation],
})
export class RankingListComponent {

  @Input() regionList = [];

}
