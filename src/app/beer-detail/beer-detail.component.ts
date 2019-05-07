import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../model/Beer';
import { ActivatedRoute } from '@angular/router';

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
