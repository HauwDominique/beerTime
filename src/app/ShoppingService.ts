import {Injectable} from '@angular/core';
import {Beer} from './model/Beer';
import {Cart} from "./model/Cart";
import {CartItem} from "./model/CartItem";


@Injectable({
    providedIn:'root',
})

export class ShoppingService{

    private _cart:Cart=new Cart();

    public addToCart(beer:Beer){
        this._cart.add(beer);
    }

    public deleteToCart(beer:Beer){
      this._cart.delete(beer);
    }

    public get cartItems():CartItem[]{
        return this._cart.cartItems;
    }

    public get totalCartItems(){
      return this._cart.totalCartItems;
    }

    public get totalPrice(){
        return this._cart.totalPrice;
    }

  /**
   *Vérifie si le panier est vide
   * @return boolean
   */
    public cartIsEmpty():boolean {
      if (this.totalCartItems === 0) {
        return true;
      }
    }


}
