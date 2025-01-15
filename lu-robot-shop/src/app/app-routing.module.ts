import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - lu_robot_shop"},
  { path: 'catalog', component: CatalogComponent, title: "Catalog - lu_robot_shop"},
  { path: 'cart', component: CartComponent, title: "Cart - lu_robot_shop"},
  { path: 'signin', component: SignInComponent, title: "signin - lu_robot_shop"},
  { path: '', redirectTo: '/home', pathMatch:'full'}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
