import { Component, Input } from '@angular/core';
import { Beer } from '../model/Beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent {

  private _beer:Beer;


  @Input()
  set beer(beer:Beer){
    this._beer=beer;
  }

}
