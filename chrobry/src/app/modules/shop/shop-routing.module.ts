import { RoutingShopPages } from '@app/config/routing';
import { ShopComponent } from './shop.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: RoutingShopPages.Home,
    component: ShopComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
