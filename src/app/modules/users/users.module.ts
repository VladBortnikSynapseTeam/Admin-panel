import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './component/users.component';
import { SharedMaterialModuleModule } from '../shared-material-module/shared-material-module.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedMaterialModuleModule
  ]
})
export class UsersModule { }
