import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppActions } from '../store/actions/app.action';
import { IUser } from '../store/reducers/app.reducer';
import { AppSelectors } from '../store/selectors/app.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userList: IUser[];
  constructor(private store$: Store, private router: Router) { 
    this.store$.select(AppSelectors.userList).subscribe(userList => {
      this.userList = userList;
    });
   }
  loginUser(loginUserData){
    console.log(this.userList);
    this.userList.forEach(user => {
        if(user.email == loginUserData.email && user.password == loginUserData.password){
          this.store$.dispatch(AppActions.loginUser({user}))
          this.router.navigate(['app/dashboard'])
        }
      })
  }
  registerUser(registerUserData){
   this.store$.dispatch(AppActions.registerUser(registerUserData))
   this.router.navigate(["app/dashboard"]);
  }
}
