import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './component/profile.component';
import { SharedMaterialModuleModule } from '../shared-material-module/shared-material-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedMaterialModuleModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
