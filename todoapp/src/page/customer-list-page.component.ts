import {Component} from "@angular/core";
import {CustomerService} from "../api/customer.service";
import {Customers} from "../types/customer";

@Component({
  selector: "app-customer-list-page",
  template: `
    <div class="container">
      <h3>Liste des clients</h3>
      <button type="button" id="add-customer" class="btn btn-success">Créer un client</button>
      <div id="customers-list">
        <div id="customer" *ngFor="let item of customers">
          <a routerLink="/{{item.id}}" style="text-decoration: none;">
            {{item.fullName}}
          </a>
          <label>
             {{item.email}}
          </label>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../styles/customer-list-page-style.css']
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
