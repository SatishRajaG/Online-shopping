import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products/:id',component:ProductDetailsComponent,
    children:[
      {path:'rating',component:ProductRatingComponent}
    ]
  },
  {path:'customer',component:CustomerComponent}
// 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
