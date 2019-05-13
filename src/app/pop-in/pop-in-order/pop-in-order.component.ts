import { Component, OnInit, Input } from '@angular/core';
import {Button} from "../Button";

@Component({
  selector: 'app-pop-in-order',
  templateUrl: './pop-in-order.component.html',
  styleUrls: ['./pop-in-order.component.css']
})
export class PopInOrderComponent implements OnInit {

  @Input() buttonOrder:Button[];

  constructor() { }

  ngOnInit() {
  }

}
