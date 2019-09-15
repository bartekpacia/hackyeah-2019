import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { listAnimation } from '@app/animations/list.animation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation],
})
export class RankingComponent {

  @Input() regionsList: Array<any> = [];

}
