import {Injectable, Input} from "@angular/core";

@Injectable({
  providedIn:'root',
})

export class PopInDeleteService {

@Input() _showPopInDelete:boolean;

  constructor (){
  }

  public hidePopInDelete(){
    return this._showPopInDelete = false;
  }



}
