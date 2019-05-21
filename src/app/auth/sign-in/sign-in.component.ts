import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm:FormGroup;
  errorMessage:string;


  constructor(private authService:AuthService,
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signinForm = this.formBuilder.group({
      email:[''],
      password:['']
    });
  }

  onSubmit(){
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email, password).then(
      ()=>{
        this.router.navigate(['/shopping']);
      },
      (error)=>{
        this.errorMessage = error;
      })
  }

}
