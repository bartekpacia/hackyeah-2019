import { ProgressComponent } from './containers/progress/progress.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingRankingPages } from '@app/config/routing';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: RoutingRankingPages.Home,
    component: ProgressComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule { }
