import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeerDetailComponent} from './beer-detail/beer-detail.component';
import {BeersListComponent} from './beers-list/beers-list.component';
import {ShoppingViewComponent} from './shopping-view/shopping-view.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {PopInComponent} from './pop-in/pop-in.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AddressComponent} from "./address/address.component";
import {RegisterCountComponent} from "./register-count/register-count.component";


const routes:Routes = [
  { path: '', redirectTo:'/list', pathMatch:'full'},
  { path: 'list', component:BeersListComponent},
  { path: 'detail/:id', component: BeerDetailComponent },
  { path: 'shopping', component:ShoppingViewComponent },
  { path: 'shoppingList', component:ShoppingListComponent},
  { path: 'popIn', component:PopInComponent },
  { path: 'connexion', component:ConnexionComponent },
  { path: 'register', component:RegisterCountComponent },
  { path: 'address', component:AddressComponent }

]


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
