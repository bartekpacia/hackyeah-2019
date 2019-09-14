import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './containers/progress/progress.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    ProgressRoutingModule,
    FontAwesomeModule
  ]
})
export class ProgressModule { }
