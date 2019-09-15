import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {

  region = 'poland';

  currentRegionList = [];

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

  selectRegion(region: string): void {
    this.region = region;
    this.currentRegionList = this.regions[region];
  }
}
