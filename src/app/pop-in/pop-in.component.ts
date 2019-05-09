import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Button} from "./Button";

@Component({
  selector: 'app-pop-in',
  templateUrl: './pop-in.component.html',
  styleUrls: ['./pop-in.component.css']
})

export class PopInComponent {

  @Input() title: string;
  @Input() buttons: Button[];
  @Output() onButtonClick: EventEmitter<Button> = new EventEmitter();
  @Output() onButtonToConnectClick: EventEmitter<Button> = new EventEmitter();



  public handleButtonEvent(button): void {
    this.onButtonClick.emit(button);
  }


}
