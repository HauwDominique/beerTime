import {Component, OnInit, Input} from '@angular/core';
import {ShoppingService} from '../ShoppingService';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CartItem} from "../model/CartItem";
import {PopInDeleteService} from "../PopInDeleteService";
import {Button} from "../pop-in/Button";
import {Cart} from "../model/Cart";


@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.css'],

})

export class ShoppingViewComponent implements OnInit {

  public cartItemToDelete : CartItem = null;
  public cartToValidated : Cart = null;
  public popInButtons:Button[] = [ new Button("Annuler", "btn-secondary"), new Button("Valider", "btn-success")];
  public popInButtonsConnexion:Button[] = [ new Button("Annuler", "brn-secondary"), new Button("Identifiez-vous", "btn-success")];
  public popInButtonsOrder:Button[] = [ new Button("Créer votre compte", "btn-secondary")];


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
  }

  public handleConnectToCountRequest(cartItems){
    if(cartItems != null){
      this.cartToValidated = cartItems;
    }
  }

  public handlePopInEvent(button:Button){
    if(button.label === this.popInButtons[1].label){
      this._shoppingService.deleteToCart(this.cartItemToDelete.beer);
    }
    this.cartItemToDelete = null;
  }


  //todo finir cette fonction, pour le bouton annuler et le bouton identifiez
  public handleConnectToCountEvent(button:Button){
  if(button.label === this.popInButtonsConnexion[0]){
    this.cartToValidated = null;
  }
  }

}

