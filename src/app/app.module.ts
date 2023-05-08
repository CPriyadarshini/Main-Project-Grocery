import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { HouseholdsComponent } from './households/households.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { PetfoodsComponent } from './petfoods/petfoods.component';
import { FrozenfoodsComponent } from './frozenfoods/frozenfoods.component';
import { BakeryComponent } from './bakery/bakery.component';
import { OilComponent } from './oil/oil.component';
import { MeatComponent } from './meat/meat.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ButterComponent } from './butter/butter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HouseholdsComponent,
    VeggiesComponent,
    KitchenComponent,
    BeveragesComponent,
    PetfoodsComponent,
    FrozenfoodsComponent,
    BakeryComponent,
    OilComponent,
    MeatComponent,
    SnacksComponent,
    ButterComponent
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
