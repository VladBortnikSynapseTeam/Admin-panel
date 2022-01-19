import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from '../store/actions/app.action';
import { IUser, IUserList } from '../store/reducers/app.reducer';
import { AppSelectors } from '../store/selectors/app.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appStore$: Observable<IUserList>;
  constructor(private store$: Store, private router: Router) { 
    this.appStore$ = this.store$.select(AppSelectors.state);
   }
  loginUser(loginUserData){
    this.appStore$.subscribe(appData => {
      appData.userList.forEach(user => {
        if(user.email == loginUserData.email && user.password == loginUserData.password){
          this.router.navigate(['app/dashboard'])
        }
      })
    })
  }
  registerUser(registerUserData){
   this.store$.dispatch(AppActions.registerUser(registerUserData))
   this.router.navigate(["app/dashboard"]);
  }
}
