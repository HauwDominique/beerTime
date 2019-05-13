import {Component, OnInit, Input} from '@angular/core';
import {ShoppingService} from '../ShoppingService';
import {Button} from "../pop-in/Button";
import {Cart} from "../model/Cart";


@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.css'],
})

export class ShoppingViewComponent implements OnInit {

  public cartToValidated : Cart = null;
  public popInButtonsConnexion:Button[] = [ new Button("Annuler", "brn-secondary"), new Button("Identifiez-vous", "btn-success")];
  public popInButtonsOrder:Button[] = [ new Button("Créer votre compte", "btn-secondary")];


  constructor(private _shoppingService: ShoppingService) {
  }


  public handleConnectToCountRequest(cartItems){
  if(cartItems != null){
    this.cartToValidated = cartItems;
  }
}


}

