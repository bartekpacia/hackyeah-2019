import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrophiesComponent } from './containers/trophies/trophies.component';
import { RoutinTrophiesgModule } from './trophies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RoutinTrophiesgModule,
    SharedModule,
    FontAwesomeModule,
  ],
  declarations: [TrophiesComponent]
})
export class TrophiesModule { }
