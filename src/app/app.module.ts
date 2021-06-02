import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import {CalServiceService} from './cal-service.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeService } from './employee.service';
import { RfFormComponent } from './rf-form/rf-form.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFormComponent } from './appointment/app-form/app-form.component';
import { RfForm1Component } from './appointment/rf-form1/rf-form1.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomerComponent,
    ProductDetailsComponent,
    ProductRatingComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    RfFormComponent,
    EmpFormComponent,
    AppFormComponent,
    RfForm1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CalServiceService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
