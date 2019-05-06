import { Component, OnInit, Input, Output } from '@angular/core';
import { PopInDeleteService } from "../PopInDeleteService";
import {ShoppingService} from "../ShoppingService";
import {Beer} from "../model/Beer";
import {CartItem} from "../model/CartItem";

@Component({
  selector: 'app-pop-in-delete',
  templateUrl: './pop-in-delete.component.html',
  styleUrls: ['./pop-in-delete.component.css']
})

export class PopInDeleteComponent implements OnInit {

  constructor(private _popInDeleteService : PopInDeleteService,
              private _shoppingService : ShoppingService) {
  }

  ngOnInit() {
  }

  public delete(beer:Beer){
    return this._shoppingService.deleteToCart(beer);
  }



}
