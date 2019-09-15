import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingGamesPages } from '@app/config/routing';
import { GamesComponent } from '@app/modules/games/containers/games/games.component';


const routes: Routes = [
  {
    pathMatch: 'full',
    path: RoutingGamesPages.Home,
    component: GamesComponent
  },
  {
    path: RoutingGamesPages.Quiz,
    loadChildren: () => import(`@app/modules/games/modules/quiz/quiz.module`)
      .then(module => module.QuizModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }