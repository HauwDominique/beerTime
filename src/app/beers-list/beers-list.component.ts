import { Component } from '@angular/core';
import { BeerService } from '../BeerService';
import { ShoppingService } from '../ShoppingService';
import { Beer } from '../model/Beer';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent {

  public beers:Beer[]=[];

  private _selectedBeer:Beer;

  constructor( private _beerService:BeerService,
              private _shoppingService:ShoppingService ) {
    this.beers=_beerService.getAllBeers();
  }

  onSelect(beer:Beer){
    this._selectedBeer = beer;
  }

  addShopping(beer:Beer){
    this._shoppingService.addToCart(beer);
  }

  public get totalCartItems():number {
    return this._shoppingService.totalCartItems;
  }

}
