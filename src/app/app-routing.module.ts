import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes : Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joba Robot Shop " },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joba Robot Shop " } ,
  { path: 'cart', component: CartComponent, title: "Cart - Joba Robot Shop " },
  {path: 'sign-in', component:SignInComponent},
  {path:'form-controls',component:TemplateFormControlsComponent},
  {path:'', redirectTo: '/home', pathMatch : 'full'}


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
})
export class AppRoutingModule { }
