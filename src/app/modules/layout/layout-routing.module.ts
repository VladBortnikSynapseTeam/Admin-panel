import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { UsersComponent } from './components/users/users.component';
import {TodoComponent} from './components/todo/todo.component'
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
const routes: Routes = [
  {path: '', component: LayoutComponent, 
  children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "users", component: UsersComponent},
      {path: "todo", component: TodoComponent},
      {path: "profile", component: ProfileComponent},
      {path: "products", component: ProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
