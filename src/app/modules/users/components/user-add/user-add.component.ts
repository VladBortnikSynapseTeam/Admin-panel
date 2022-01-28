import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/store/actions/app.action';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private store$: Store) { 
    
   }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      nickname: new FormControl('',[Validators.required, Validators.minLength(6)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required]),
      userId: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl('')
    })
  }

  addUser(){
    this.store$.dispatch(AppActions.addUser({
      firstName: this.addForm.value.firstName,
      lastName: this.addForm.value.lastName,
      nickname: this.addForm.value.nickname,
      email: this.addForm.value.email,
      phone: this.addForm.value.phone,
      userId: this.addForm.value.userId,
      country: this.addForm.value.country,
      city: this.addForm.value.city
    }))
  }

}
