import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/modules/shared/shared.module';

import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './containers/progress/progress.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { FormModule } from '@app/modules/form/form.module';

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
    SharedModule,
    FormModule
  ]
})
export class ProgressModule { }
