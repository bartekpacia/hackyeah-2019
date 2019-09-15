import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './containers/shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule { }
