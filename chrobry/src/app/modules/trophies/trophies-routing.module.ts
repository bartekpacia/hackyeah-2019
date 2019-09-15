import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingTrophiesPages } from '@app/config/routing';
import { TrophiesComponent } from './containers/trophies/trophies.component';


const routes: Routes = [
  {
    pathMatch: 'full',
    path: RoutingTrophiesPages.Home,
    component: TrophiesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutinTrophiesgModule { }
