import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editForm: FormGroup;
  notificationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editForm = new FormGroup({

    })
    this.notificationForm = new FormGroup({
      
    })
  }

}
