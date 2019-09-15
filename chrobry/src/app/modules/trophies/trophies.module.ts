import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrophiesComponent } from './containers/trophies/trophies.component';
import { RoutinTrophiesgModule } from './trophies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutinTrophiesgModule
  ],
  declarations: [TrophiesComponent]
})
export class TrophiesModule { }
