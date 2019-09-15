import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankingComponent implements OnInit {


  region = 'poland';

  currentRegionList = [];

  regionList = {
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

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.currentRegionList = this.regionList[this.region];
      this.cdr.detectChanges();
    }, 1000);
  }

  selectRegion(region: string): void {
    this.region = region;
    this.currentRegionList = this.regionList[region];
  }


}
