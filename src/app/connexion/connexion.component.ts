import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Cart} from "../model/Cart";
import {Button} from "../pop-in/Button";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  @Input() cartToValidated:Cart;
  @Output() onButtonToConnectClick: EventEmitter<Button> = new EventEmitter();

  title:string = "Identifiez-vous";

  constructor() { }

  ngOnInit() {
  }

  handleClosePopInConnexion(){
    this.onButtonToConnectClick.emit();
  }

}
