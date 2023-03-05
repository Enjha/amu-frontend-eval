import {Component} from "@angular/core";
import {CustomerService} from "../api/customer.service";
import {Customers} from "../types/customer";

@Component({
  selector: "app-customer-list-page",
  template: `
      <div class="container">
          <h2 style="font-size: 40px;">Liste des clients</h2>
          <button type="button" id="add-customer" routerLink="/create">Créer un client</button>
          <div id="customers-list">
              <div id="customer" *ngFor="let item of customers">
                  <a id="fullName" routerLink="/{{item.id}}/">
                      {{item.fullName}}
                  </a>
                  <label>
                      {{item.email}}
                  </label>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['../../styles/customer-list-page-style.css']
})
export class CustomerListPageComponent {
  customers : Customers = [];
  constructor(private service: CustomerService) {
  }

  ngOnInit() {
    this.service
      .findAll()
      .subscribe((customers) => this.customers = customers)
  }

  // À coller dans le component add customer
  addCustomer(text: string) {
    this.service
      .create(text)
      .subscribe((customers) => this.customers.push(customers[0]));
  }
}
