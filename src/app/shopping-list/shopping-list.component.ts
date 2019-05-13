import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../ShoppingService';
import {CartItem} from "../model/CartItem";
import {Button} from "../pop-in/Button";
import {Cart} from "../model/Cart";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public cartItemToDelete : CartItem = null;
  public cartToValidated : Cart = null;
  public popInButtons:Button[] = [ new Button("Annuler", "btn-secondary"), new Button("Valider", "btn-success")];


  constructor(private _shoppingService: ShoppingService) {
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

  // goBack() {
  //   this.location.back();
  // }

  /**
   * stocke le produit à supprimer dans la variable cartItemToDelete
   * sert pour afficher la popIn de suppression (lorsque cartItemToDelete  n'est pas null
   * @param cartItem
   * return {object}
   */
  public handleCartItemDeleteRequest(cartItem){
    this.cartItemToDelete = cartItem;
  }

  // public handleConnectToCountRequest(cartItems){
  //   if(cartItems != null){
  //     this.cartToValidated = cartItems;
  //   }
  // }

  /**
   * Gère les boutons de suppression et d'annulation
   * @param button
   */
  public handlePopInEvent(button:Button){
    if(button.label === this.popInButtons[1].label){
      this._shoppingService.deleteToCart(this.cartItemToDelete.beer);
    }
    this.cartItemToDelete = null;
  }

  //todo finir cette fonction, pour le bouton annuler et le bouton identifiez
  // public handleConnectToCountEvent(button:Button){
  // if(button.label === this.popInButtonsConnexion[0]){
  //   this.cartToValidated = null;
  //   }
  // }


}
