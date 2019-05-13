import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { FormsModule } from "@angular/forms";
import { PopInComponent } from './pop-in/pop-in.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { PopInConnexionComponent } from './pop-in/pop-in-connexion/pop-in-connexion.component';
import { PopInOrderComponent } from './pop-in/pop-in-order/pop-in-order.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersListComponent,
    ShoppingViewComponent,
    PopInComponent,
    OrderCartComponent,
    PopInConnexionComponent,
    PopInOrderComponent,
    ShoppingListComponent,
    ConnexionComponent,
    AddressComponent
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
