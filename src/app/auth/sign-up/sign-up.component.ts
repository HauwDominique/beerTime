import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm:FormGroup;
  errorMessage:string;

  constructor(private formbuilder:FormBuilder,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signupForm = this.formbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
      // password:['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{,}/)]]

    });
  }

  /**
   * méthode qui vérifie que la création d'un utilisateur est valide
   * si valid, redirige vers la page de liste de bière
   * sinon retourne un message d'erreu
   */
  onSubmit(){
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    this.authService.createNewUser(email, password).then(
      ()=>{
        this.router.navigate(['/list']);
      },
      (error)=>{
        this.errorMessage = error;
      }
    )
  }

}
