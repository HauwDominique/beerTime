import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { PopInComponent } from './pop-in/pop-in.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterCountComponent } from './register-count/register-count.component';
import { HttpClientModule} from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { UsersDataService } from "./UsersData.service";
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from "./auth/auth.service";


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
    RegisterCountComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(UsersDataService, {delay:100})
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
