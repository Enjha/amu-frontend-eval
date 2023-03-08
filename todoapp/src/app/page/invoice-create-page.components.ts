import {Component} from "@angular/core";
import {InvoiceService} from "../api/invoice.service";
import {Invoices} from "../types/invoice";

@Component({
  selector: "app-invoice-create-page",
  template: `
    <div class="container">
      <h2 style="font-size: 40px;">Création d'une facture</h2>
      <div id="button-div">
        <button type="button" id="back" routerLink="/">Retour aux clients</button>
      </div>
      <div id="form">
        <app-invoice-form-page (onNewInvoice)="addInvoice($event)"></app-invoice-form-page>
      </div>
    </div>
  `,
  styleUrls: ['../../styles/structure.css', '../../styles/utils.css']
})
export class InvoiceCreatePageComponents {

  invoices: Invoices = [];

  constructor(private invoiceService: InvoiceService) {
  }

  addInvoice(obj: any) {
    this.invoiceService
      .create(obj)
      .subscribe((invoices) => this.invoices.push(invoices[0]));
  }

}

