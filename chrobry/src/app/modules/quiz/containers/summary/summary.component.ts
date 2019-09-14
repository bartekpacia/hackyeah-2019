import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut } from '@app/animations/fade-in-out.animation';

import { RoutingAppPages } from '@app/config/routing';
import { ScoreService } from '@app/modules/quiz/services/score.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class SummaryComponent implements AfterViewInit {
  loaded: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router, private scoreService: ScoreService) { }

  ngAfterViewInit(): void {
    this.loaded = true;
    this.changeDetectorRef.detectChanges();
  }

  newGame(): void {
    this.scoreService.reset();
    this.router.navigate([RoutingAppPages.Quiz]);
  }
}
