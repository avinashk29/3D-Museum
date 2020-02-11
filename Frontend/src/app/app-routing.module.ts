import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './User/header/header.component';
import { ProductPageComponent } from './User/product-page/product-page.component';
import { CartComponent } from './User/cart/cart.component';

const routes: Routes = [
  {path: '' , component: HeaderComponent},
  {path: 'product/:id' , component: ProductPageComponent},
  {path: 'cart' , component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
