import { Component} from '@angular/core';
import { User} from "../model/User";

@Component({
  selector: 'app-register',
  templateUrl: './register-count.component.html',
  styleUrls: ['./register-count.component.css']
})
export class RegisterCountComponent {

  model = new User(1, 'John', 'Doe', 'JohnDoe@gmail.com', '1234', 'rue de la baston' );

  submitted = false;

  onSubmit() {
    this.submitted = true
  }

  /**
   * méthode qui vide les champs
   */
  newUser(){
    this.model=new User(2, '', "", "", "", "");
  }


//TODO : Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
