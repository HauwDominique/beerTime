import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { FormsModule } from "@angular/forms";
import { PopInDeleteComponent } from './pop-in-delete/pop-in-delete.component';
import { OrderCartComponent } from './order-cart/order-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersListComponent,
    ShoppingViewComponent,
    PopInDeleteComponent,
    OrderCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
