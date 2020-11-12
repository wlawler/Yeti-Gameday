import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { ProductListComponent } from './market-place/Product-List/product-list/product-list.component';
import { MarketPlaceModule} from './market-place/market-place.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketPlaceComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,//angular-module 
    AppRoutingModule, 
    MarketPlaceModule //custom module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
