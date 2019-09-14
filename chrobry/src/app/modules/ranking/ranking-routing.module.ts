import { RankingComponent } from './containers/ranking/ranking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingRankingPages } from '@app/config/routing';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: RoutingRankingPages.Home,
    component: RankingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
