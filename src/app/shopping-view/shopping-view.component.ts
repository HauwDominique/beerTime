import {Component, OnInit, Input} from '@angular/core';
import {ShoppingService} from '../ShoppingService';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CartItem} from "../model/CartItem";
import {PopInDeleteService} from "../PopInDeleteService";


@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.css']
})

export class ShoppingViewComponent implements OnInit {

  constructor(private _shoppingService: ShoppingService,
              private _popInDeleteService : PopInDeleteService,
              private activedRoute: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
  }

  public get cartItems():CartItem[] {
    return this._shoppingService.cartItems;
  }

  public get totalCartItems():number {
    return this._shoppingService.totalCartItems;
  }

  public get totalPrice():number {
    return this._shoppingService.totalPrice;
  }

  goBack() {
    this.location.back();
  }

}

