import {Component} from "@angular/core";
import {CustomerService} from "../api/customer.service";
import {Customers} from "../types/customer";

@Component({
  selector: "app-customer-create-page",
  template: `
      <div class="container">
          <h2 style="font-size: 40px;">Création d'un client</h2>
          <div id="button-div">
              <button type="button" id="back" routerLink="/">Retour aux clients</button>
          </div>
          <div id="form">
              <app-customer-form-page (onNewCustomer)="addCustomer($event)"></app-customer-form-page>
          </div>
      </div>
  `,
  styleUrls: ['../../styles/customer-list-page-style.css']
})
export class CustomerCreatePageComponent {

  customers: Customers = [];

  constructor(private customerService: CustomerService) {
  }

  addCustomer(obj:any){
    this.customerService
      .create(obj)
      .subscribe((customers) => this.customers.push(customers[0]));
  }

}

