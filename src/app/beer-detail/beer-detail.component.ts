import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../model/Beer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  @Input() beer:Beer;

  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
