import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/store/reducers/app.reducer';
import { AppSelectors } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editForm: FormGroup;
  notificationForm: FormGroup;
  currentUser: Observable<IUser>;
  constructor(private store$: Store) {
   this.currentUser = this.store$.select(AppSelectors.currentUser)

  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl('', [Validators.email,Validators.required]),
      phone: new FormControl("", Validators.required),
      country: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required)
    })
    this.notificationForm = new FormGroup({
      notificationsEmail: new FormControl(false),
      notificationsPush: new FormControl(false),
      notificationsText: new FormControl(false),
      notificationsPhone: new FormControl(false),
      messagesEmail: new FormControl(false),
      messagesPush: new FormControl(false),
      messagesText: new FormControl(false),
    })
  }

  profileEdit():void{
    console.log(this.editForm.value);
  }
  
  notificationsSettings():void{
    console.log(this.notificationForm.value);
    
  }
}
