import { ChangeDetectionStrategy, Component } from '@angular/core';
import { listAnimation } from '@app/animations/list.animation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation],
})
export class RankingComponent {

  progressArray = [
    {
      title: 'Name Surname',
      icon: 'avatar_men',
    },
    {
      title: 'Name Surname',
      icon: 'avatar_men',
    },
    {
      title: 'Name Surname',
      icon: 'avatar_men',
    },
    {
      title: 'Name Surname',
      icon: 'avatar_men2',
    },
    {
      title: 'Name Surname',
      icon: 'avatar_men2',
    },
    {
      title: 'Name Surname',
      icon: 'avatar_women',
    },
    {
      title: 'Name Surname',
      icon: 'avatar_women2',
    },
    {
      title: 'Name Surname',
      icon: 'avatar_women2',
    }
  ];
}
