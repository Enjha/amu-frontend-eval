import {Component} from "@angular/core";
import {CustomerService} from "../api/customer.service";
import {InvoiceService} from "../api/invoice.service";
import {Customer} from "../types/customer";
import {Invoice} from "../types/invoice";

@Component({
  selector: "app-customer-details-page",
  template: ``
})
export class CustomerDetailsPageComponent {

  constructor(private CustomerService: CustomerService, private InvoiceService: InvoiceService) {
  }

}

