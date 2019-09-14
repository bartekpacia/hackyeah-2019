import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankingComponent {
  region = 'poland';

  selectRegion(region: string): void {
    this.region = region;
  }
}
