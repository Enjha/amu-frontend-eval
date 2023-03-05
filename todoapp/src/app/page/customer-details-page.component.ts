import {Component} from "@angular/core";
import {CustomerService} from "../api/customer.service";
import {InvoiceService} from "../api/invoice.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../types/customer";
import {Invoices} from "../types/invoice";

@Component({
  selector: "app-customer-details-page",
  template: `
    <div class="container" *ngIf="customer">
      <h2 style="font-size: 40px;">Liste des factures de
        <p *ngIf="customer"> {{customer.fullName}}</p>
        <p *ngIf="!customer"> NULL</p>
        <p *ngIf="customer" style="font-size: 25px"> ({{customer.email}})</p>
        <p *ngIf="!customer"> (NULL)</p>
      </h2>
      <div id="button-div">
        <button type="button" id="back" routerLink="/">Retour aux clients</button>
        <button type="button" id="add-invoice" routerLink="/{{customer.id}}/invoices/add">Créer une facture</button>
      </div>
      <table id="invoices-list" class="table table-striped">
        <thead class="thead-info">
        <tr>
          <th scope="col">Montant(€)</th>
          <th scope="col">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of invoices">
          <td>{{item.amount / 100}}€</td>
          <td *ngIf="item.status == 'SENT'">Envoyée</td>
          <td *ngIf="item.status == 'PAID'">Payée</td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['../../styles/customer-list-page-style.css']
})
export class CustomerDetailsPageComponent {
  customer?: Customer;
  invoices: Invoices = [];

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private customerService: CustomerService) {
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.customerService
      .findOne(id)
      .subscribe(customers => this.customer = customers[0])

    this.invoiceService
      .findByCustomerId(id)
      .subscribe(invoices => this.invoices = invoices)
  }


}

