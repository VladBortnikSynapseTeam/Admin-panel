import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  successLogin: boolean = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  loginForm = new FormGroup({
    username: new FormControl("",Validators.minLength(6)),
    password: new FormControl("",[
      Validators.required,
    CustomValidators.patternValidator(/[a-zA-Z]/,{noAlphabeticCharacters:true}),
    CustomValidators.patternValidator(/[0-9]/,{noNumericCharacters: true}),
    CustomValidators.patternValidator(/[!@\$%\^\&*\)\(+=._-]/,{noSpecialCharacters:true}),
    Validators.minLength(8)
    ])
  })
  constructor(private auth: AuthService, private router: Router) { }
  
  ngOnInit(): void {

  }

  loginUser(loginForm: FormGroup){
  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
