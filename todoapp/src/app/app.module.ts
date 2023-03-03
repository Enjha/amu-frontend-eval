import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {CustomerListPageComponent} from "../page/customer-list-page.component";
import {CustomerDetailsPageComponent} from "../page/customer-details-page.component";
import {CustomerService} from "../api/customer.service";
import {InvoiceService} from "../api/invoice.service";



const routes: Routes = [
  { path: '', component: CustomerListPageComponent },
  { path: ':id/details', component: CustomerDetailsPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerListPageComponent,
    CustomerDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomerService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
