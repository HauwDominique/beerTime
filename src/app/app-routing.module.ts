import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import {PopInDeleteComponent} from "./pop-in-delete/pop-in-delete.component";

const routes:Routes = [
  { path: '', redirectTo:'/list', pathMatch:'full'},
  { path: 'list', component:BeersListComponent},
  { path: 'detail/:id', component: BeerDetailComponent },
  { path: 'shopping', component:ShoppingViewComponent },
  { path: 'popInDelete', component:PopInDeleteComponent }
]


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
