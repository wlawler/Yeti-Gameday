import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { MarketPlaceComponent} from './market-place/market-place.component'; 



const routes: Routes = [
  {path: "home-component", component: HomeComponent}, 
  {path: "marketPlace-component", component: MarketPlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
