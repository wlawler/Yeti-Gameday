import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketPlaceComponent } from './market-place.component';
import { ProductListComponent } from './Product-List/product-list/product-list.component';
import { ProductAlertComponent } from './Product-Alert/product-alert/product-alert.component';





@NgModule({
  declarations: [
    ProductListComponent, 
    MarketPlaceComponent, 
    ProductAlertComponent
   
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ProductListComponent, 
    MarketPlaceComponent, 
    ProductAlertComponent
  ]
 
})
export class  MarketPlaceModule { };
