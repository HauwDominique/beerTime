import {CartItem} from './CartItem';
import {Beer} from "./Beer";


export class Cart{

  private _cartItems:CartItem[]=[];

  /**
   * vérifie si le produit à ajouter n'est pas déjà présent dans le tableau des produits
   * @booleans

  private _searchCartItem(beer:Beer):boolean{
    let found:number;
    let result:boolean=false;
    for(let i=0; i<this._cartItems.length; i++){
      found = this._cartItems[i].beer.name.localeCompare(beer.name);
      if (found === 0){
        result = true;

        break;
      }
    }
    return result;
  }  */

  /**
   * recherche si une bière est déjà dans le panier
   * @param beer
   * @return i (qui correspond à la position de l'objet bière dans le tableau ou -1). i sert dans la fonction add(beer:beer)
  */
  private _searchCartItem(beer:Beer):number{
    for(let i=0; i<this._cartItems.length; i++){
      if (this._cartItems[i].beer.name.localeCompare(beer.name) === 0){
        return i;
      }
    }
    return -1;
  }

  /**
   * ajoute une bière au panier, ou bien incrémente ce produit de 1 si il est déjà dans le panier
   * @param beer
  */
  public add(beer:Beer):void{
    let positionCartItem:number = this._searchCartItem(beer);
    if(positionCartItem === -1){
      this._cartItems.push(new CartItem(beer,1));
    } else {
      this._cartItems[positionCartItem].incrementCount();
    }
  }

  /**
   * supprime une bière au panier
   * @param beer
   */
  public delete(beer:Beer):void{
    let positionCartItem:number = this._searchCartItem(beer);
    this._cartItems.splice(positionCartItem, 1);
  }

  public get cartItems():CartItem[] {
    return this._cartItems;
  }

  /**
   * Récupère la liste des produits mis au panier
   * @param cartItems {array} : tableau contenant les produits du panier
   */

  public get totalCartItems(){
    let totalCartItems:number=0;
    for(let i=0; i<this._cartItems.length; i++){
    totalCartItems += this._cartItems[i].count;
    }
  return totalCartItems;
  }

  public get totalPrice(){
    let totalPrice:number=0;
    for(let i=0; i<this._cartItems.length; i++){
      totalPrice += this._cartItems[i].price;
    }
    return totalPrice;
  }

  /** Autre méthode faisant la même chose que searchCartItem
   *
   *
   var found:boolean =false

   private macallback(cartItem:CartItem) {
    found = this._cartItems[i].beer.name.localeCompare(beer.name);
    if (found === true){
      break;
    }
  }

   private _searchCartItemV1bis(beer:Beer):boolean{
    let found:boolean = false;
    for(let i=0; i<this._cartItems.length; i++){
      this.macallback(this._cartItems[i]);
    }
    return found;
  }

   private _searchCartItem2(beer:Beer):boolean{
    let found:boolean = false;
    for(let cartItem of this._cartItems){
      found = cartItem.beer.name.localeCompare(beer.name);
      if (found === true){
        break;
      }
    }
    return found;
  }
   private _searchCartItem3(beer:Beer):boolean {
    let found: boolean = false;
    this._cartItems.forEach(cartItem => {
      let localFound: boolean = cartItem.beer.name.localeCompare(beer.name);
      if (localFound === true && found === false) {
        found = true;
      }
    })
    return found;
    }

   private _searchCartItem4(beer:Beer):boolean{
      return this._cartItems
        .some(cartItem=> cartItem.beer.name.localeCompare(beer.name));
  }

   */


}
