import { Beer } from './Beer';

export class CartItem{

  private _beer:Beer=null;
  private _count:number=0;
  public quantites = [0, 1, 2, 3, 4];


  constructor(beer:Beer, count:number){
    this._beer = beer;
    this._count = count;
  }

  get beer():Beer {
    return this._beer;
  }

  get count():number{
    return this._count;
  }


  /**
   * met à jour les quantités modifiées par l'utilisateur d'un produit du panier
   * @param nb
   * @return number
   */
  public updateCount(nb:string){
    let parsed = parseInt(nb);
    if(isNaN(parsed)){
      this._count = 1;
    } else{
      this._count = (parseInt(nb));
    }
  }

  public incrementCount():void{
    this._count++;
  }

  get price():number{
    return this._beer.price * this._count;
  }



}
