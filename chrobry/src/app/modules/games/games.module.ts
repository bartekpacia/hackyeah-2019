import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './containers/games/games.component';
import { SharedModule } from '@app/modules/shared/shared.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
