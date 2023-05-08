import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'', redirectTo: 'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'households', component: HouseholdsComponent},
  {path:'veggies', component: VeggiesComponent},
  {path:'kitchen', component: KitchenComponent},
  {path:'beverages', component: BeveragesComponent},
  {path:'petfoods', component: PetfoodsComponent},
  {path:'frozenfoods', component: FrozenfoodsComponent},
  {path:'bakery', component: BakeryComponent},
  {path:'oil', component: OilComponent},
  {path:'butter', component: ButterComponent},
  {path:'meat', component: MeatComponent},
  {path:'snacks', component: SnacksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
