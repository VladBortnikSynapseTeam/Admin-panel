import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/helpers/custom-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successLogin: boolean = true;
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("user@mail.com",Validators.minLength(6)),
      password: new FormControl("Cardlord231202!",[
        Validators.required,
        CustomValidators.patternValidator(/[a-zA-Z]/,{noAlphabeticCharacters:true}),
        CustomValidators.patternValidator(/[0-9]/,{noNumericCharacters: true}),
        CustomValidators.patternValidator(/[!@\$%\^\&*\)\(+=._-]/,{noSpecialCharacters:true}),
        Validators.minLength(8)
      ])
    })
  }

  loginUser(loginForm: FormGroup){
    let data = loginForm.value;
    let loginUserData = {
      email: data.username,
      password: data.password
    }
    this.authService.loginUser(loginUserData)
  }
}
