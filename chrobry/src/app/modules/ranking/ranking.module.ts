import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/modules/shared/shared.module';
import { FormModule } from '@app/modules/form/form.module';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingListComponent } from './components/ranking-list/ranking-list.component';
import { RankingComponent } from './containers/ranking/ranking.component';

@NgModule({
  declarations: [
    RankingComponent,
    RankingListComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    FontAwesomeModule,
    SharedModule,
    FormModule
  ]
})
export class RankingModule { }
