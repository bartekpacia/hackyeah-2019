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
  @Input() region: string;

  regions = {
    poland: [
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
    ],
    mazowieckie: [
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
    ],
    warsaw: [
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
    ]
  };

}
