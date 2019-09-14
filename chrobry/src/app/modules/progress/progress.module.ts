import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './containers/progress/progress.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProgressComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProgressRoutingModule,
    FontAwesomeModule
  ]
})
export class ProgressModule { }
