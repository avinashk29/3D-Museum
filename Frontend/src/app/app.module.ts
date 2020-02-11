import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Routing Imports
import { AppRoutingModule } from './app-routing.module';

// Component Imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './User/header/header.component';
import { ProductPageComponent } from './User/product-page/product-page.component';

// Service Imports
import { ProductServiceService } from './Service/product-service.service';
import { CartComponent } from './User/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductPageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
