import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { FilterComponent } from './components/shoping-cart/filter/filter.component';
import { ProductListComponent } from './components/shoping-cart/product-list/product-list.component';
import { CartComponent } from './components/shoping-cart/cart/cart.component';
import { CartItemComponent } from './components/shoping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shoping-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShopingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
