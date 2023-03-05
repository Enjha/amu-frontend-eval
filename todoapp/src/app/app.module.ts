import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CustomerListPageComponent} from "./page/customer-list-page.component";
import {CustomerDetailsPageComponent} from "./page/customer-details-page.component";
import {CustomerService} from "./api/customer.service";
import {InvoiceService} from "./api/invoice.service";
import {CustomerCreatePageComponent} from "./page/customer-create-page.component";
import {CustomerFormComponent} from "./form/customer-form.component";
import {InvoiceCreatePageComponents} from "./page/invoice-create-page.components";
import {InvoiceFormComponent} from "./form/invoice-form.component";


const routes: Routes = [
  {path: '', component: CustomerListPageComponent},
  {path: 'create', component: CustomerCreatePageComponent},
  {path: ':id', component: CustomerDetailsPageComponent},
  {path: ':id/invoices/add', component: InvoiceCreatePageComponents},

]

@NgModule({
  declarations: [
    AppComponent,
    CustomerListPageComponent,
    CustomerDetailsPageComponent,
    CustomerCreatePageComponent,
    InvoiceCreatePageComponents,
    CustomerFormComponent,
    InvoiceFormComponent
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
export class AppModule {
}
