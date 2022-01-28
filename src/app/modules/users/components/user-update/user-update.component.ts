import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/store/actions/app.action';
import { IUser } from 'src/app/store/reducers/app.reducer';
import { AppSelectors } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  routerId: string;
  editForm: FormGroup;
  updatedUser: IUser;
  constructor(private router: ActivatedRoute, private store$: Store) { 
   
   }

  ngOnInit(): void {
    this.router.params
    .subscribe(params => this.routerId = params['id'])

    this.store$.select(AppSelectors.userList)
    .subscribe(list => {
      list.forEach(user => {
        if(user.userId === this.routerId){
          this.updatedUser = user;
        }
      })

    })
    this.editForm = new FormGroup({
      firstName: new FormControl(this.updatedUser.firstName,[Validators.required]),
      lastName: new FormControl(this.updatedUser.lastName,[Validators.required]),
      nickname: new FormControl(this.updatedUser.nickname,[Validators.required, Validators.minLength(6)]),
      email: new FormControl(this.updatedUser.email,[Validators.required, Validators.email]),
      phone: new FormControl(this.updatedUser.phone,[Validators.required]),
      userId: new FormControl(this.updatedUser.userId),
      country: new FormControl(this.updatedUser.country),
      city: new FormControl(this.updatedUser.city)
    })
  }

  editUser(){
    this.store$.dispatch(AppActions.editUser({
      firstName: this.editForm.value.firstName,
      lastName: this.editForm.value.lastName,
      nickname: this.editForm.value.nickname,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
      userId: this.editForm.value.userId,
      country: this.editForm.value.country,
      city: this.editForm.value.city
    }))
  }
}
