import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from 'src/app/store/actions/app.action';
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
  currentUser: IUser;
  constructor(private store$: Store) {
  this.store$.select(AppSelectors.currentUser)
  .subscribe(user => this.currentUser = user);
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      firstName: new FormControl(this.currentUser.firstName, Validators.required),
      lastName: new FormControl(this.currentUser.lastName, Validators.required),
      email: new FormControl(this.currentUser.email, [Validators.email,Validators.required]),
      phone: new FormControl(this.currentUser.phone, Validators.required),
      country: new FormControl(this.currentUser.country,Validators.required),
      city: new FormControl(this.currentUser.city,Validators.required)
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
    this.store$.dispatch(AppActions.editUserInfo({
      firstName: this.editForm.value.firstName,
      lastName: this.editForm.value.lastName,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
      country: this.editForm.value.country,
      city: this.editForm.value.city
    }))
  }
  
  notificationsSettings():void{
    this.store$.dispatch(AppActions.editNotifications({
      messagesEmail: this.notificationForm.value.messagesEmail,
      messagesPush: this.notificationForm.value.messagesPush,
      messagesText: this.notificationForm.value.messagesText,
      notificationsEmail: this.notificationForm.value.notificationsEmail,
      notificationsPhone: this.notificationForm.value.notificationsPhone,
      notificationsPush: this.notificationForm.value.notificationsPush,
      notificationsText: this.notificationForm.value.notificationsText
    }))
    
  }

  userPhotoUpdate(image):void{
    this.store$.dispatch(AppActions.changeAvatar({imgPath: image[0].name}))
  }

  removeAvatar():void{
    this.store$.dispatch(AppActions.removeAvatar());
  }
}
