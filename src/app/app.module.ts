import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { PopInComponent } from './pop-in/pop-in.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AddressComponent } from './address/address.component';
import { RegisterCountComponent } from './register-count/register-count.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersListComponent,
    ShoppingViewComponent,
    ShoppingListComponent,
    PopInComponent,
    OrderCartComponent,
    ConnexionComponent,
    AddressComponent,
    RegisterCountComponent,
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
