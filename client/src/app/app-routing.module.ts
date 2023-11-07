import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {QuadraticComponent} from "./_components/quadratic/quadratic.component";
import {ProductsComponent} from "./_components/products/products.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "quadratic",
    component: QuadraticComponent
  },
  {
    path: "products",
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
