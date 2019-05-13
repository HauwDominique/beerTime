import {Component, OnInit} from '@angular/core';
import {BeerService} from '../BeerService';
import {ShoppingService} from '../ShoppingService';
import {Beer} from "../model/Beer";

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {

  public beers:Beer[]=[];

  constructor( private _beerService:BeerService,
               private _shoppingService:ShoppingService ) {
    this.beers=_beerService.getAllBeers();
  }

  public get totalCartItems():number {
    return this._shoppingService.totalCartItems;
  }

  ngOnInit(): void {
  }


}
