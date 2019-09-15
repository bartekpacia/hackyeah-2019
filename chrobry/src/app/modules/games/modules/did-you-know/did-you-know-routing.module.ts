import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingDidYouKnowPages } from '@app/config/routing';
import { DidYouKnowComponent } from '@app/modules/games/modules/did-you-know/containers/did-you-know/did-you-know.component';

const routes: Routes = [
  {path: RoutingDidYouKnowPages.Home, component: DidYouKnowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DidYouKnowRoutingModule { }
