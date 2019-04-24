import {CartItem} from './CartItem';
import {Beer} from "./Beer";

export class Cart{

  private _cartItems:CartItem[]=[];


  public add(beer:Beer):void{
    this._cartItems.push(new CartItem(beer,1));
  }

  public get cartItems():CartItem[] {
    return this._cartItems;
  }


  /**
   * @param cartItems {array} : tableau contenant les produits du panier
   */


  public get totalCartItems(){
    let totalCartItems:number=0;
    for(let i=0; i<this._cartItems.length; i++){
    totalCartItems += this._cartItems[i].count;
    }
  return totalCartItems;
  }

  /*
  public get totalItem(){
  }
*/

  public get totalPrice(){
    let totalPrice:number=0;
    for(let i=0; i<this._cartItems.length; i++){
      totalPrice += this._cartItems[i].price;
    }
    return totalPrice;
  }


}
