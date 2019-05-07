import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Button} from "./Button";

@Component({
  selector: 'app-pop-in-delete',
  templateUrl: './pop-in-delete.component.html',
  styleUrls: ['./pop-in-delete.component.css']
})

export class PopInDeleteComponent {

  @Input() title: string;
  @Input() buttons: Button[];
  @Output() onButtonClick: EventEmitter<Button> = new EventEmitter();


  public handleButtonEvent(button): void {
    this.onButtonClick.emit(button);
  }


}
