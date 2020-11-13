import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketPlaceComponent } from './market-place.component';
import { ProductListComponent } from './Product-List/product-list/product-list.component';





@NgModule({
  declarations: [
    ProductListComponent, 
    MarketPlaceComponent
   
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ProductListComponent, 
    MarketPlaceComponent
  ]
 
})
export class  MarketPlaceModule { };
