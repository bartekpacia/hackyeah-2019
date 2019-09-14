import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/modules/shared/shared.module';

import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './containers/progress/progress.component';
import { RankingComponent } from './components/ranking/ranking.component';


@NgModule({
  declarations: [
    ProgressComponent,
    RankingComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProgressRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class ProgressModule { }
