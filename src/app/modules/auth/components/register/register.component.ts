
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/custom-validators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  
  userTerms!: false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  registerForm!: FormGroup;
  
  constructor(private router: Router, private state$: Store, private authServise: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl("",[Validators.email, Validators.required]),
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      password: new FormControl("",[
      Validators.required,
      CustomValidators.patternValidator(/[a-zA-Z]/,{noAlphabeticCharacters:true}),
      CustomValidators.patternValidator(/[0-9]/,{noNumericCharacters: true}),
      CustomValidators.patternValidator(/[!@\$%\^\&*\)\(+=._-]/,{noSpecialCharacters:true}),
      Validators.minLength(8)
    ]),
      userRePassword: new FormControl("",[
        Validators.required,
        CustomValidators.patternValidator(/[a-zA-Z]/,{noAlphabeticCharacters:true}),
        CustomValidators.patternValidator(/[0-9]/,{noNumericCharacters: true}),
        CustomValidators.patternValidator(/[!@\$%\^\&*\)\(+=._-]/,{noSpecialCharacters:true}),
        Validators.minLength(8)
      ]),
      userTerms: new FormControl(false, [Validators.required])
    });
  }

  registerUser(formControl: any){
    //firstName:string, lastName: string, email: string, password: string
    let data = formControl.value;
    let registerUserData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }
    this.authServise.registerUser(registerUserData);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
