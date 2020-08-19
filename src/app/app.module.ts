import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { StoreComponent } from './store/store.component'
import {StoreService} from "./store/store.service";
import {ProductService} from './product/product.service'
import { ProductComponent } from './product/product.component';
import { DocComponent } from './doc/doc.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    ProductComponent,
    DocComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoreService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
