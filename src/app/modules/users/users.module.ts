import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/user-component/users.component'
import { SharedMaterialModuleModule } from '../shared-material-module/shared-material-module.module';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [UsersComponent, UserUpdateComponent, UserAddComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedMaterialModuleModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class UsersModule {}
