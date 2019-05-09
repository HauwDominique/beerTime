import {Component, OnInit, Input} from '@angular/core';
import {ShoppingService} from '../ShoppingService';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CartItem} from "../model/CartItem";
import {PopInDeleteService} from "../PopInDeleteService";
import {Button} from "../pop-in-delete/Button";


@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.css'],

})

export class ShoppingViewComponent implements OnInit {

  public cartItemToDelete : CartItem = null;
  public popInButtons:Button[] = [ new Button("Annuler", "btn-secondary"), new Button("Valider", "btn-success")];

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

  public handleCartItemDeleteRequest(cartItem){
    this.cartItemToDelete = cartItem;
    // this.cartItemToDelete;
  }

  public handlePopInEvent(button:Button){
    if(button.label === this.popInButtons[1].label){
      this._shoppingService.deleteToCart(this.cartItemToDelete.beer);
    }
    this.cartItemToDelete = null;
  }

}

