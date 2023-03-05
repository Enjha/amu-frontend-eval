import {Component, Output, EventEmitter} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-invoice-form-page",
  template: `
    <form id="create-customer" (ngSubmit)="onSubmit()" [formGroup]="form">
      <div id="inputs">
        <div id="input">
          <label for="amount">Montant de la facture(€):</label>
          <input
            type="number"
            class="form-control"
            name="amount"
            formControlName="amount"
            placeholder="Montant de la facture"
            id="amount"
          />
        </div>
        <div id="input">
          <label for="status-invoice">Status de la facture:</label>
          <select name="status" id="status-invoice" [(ngModel)]='defaultValue' formControlName="status"
                  class="form-control">
            <option value="SENT">Envoyée</option>
            <option value="PAID">Payée</option>
          </select>
        </div>
      </div>
      <button *ngIf="loading" id="save" disabled>
        <span class="loader"></span>
      </button>
      <button *ngIf="!loading" id="save">
        <span>Enregistrer</span>
      </button>
    </form>
  `,
  styleUrls: ['../../styles/customer-list-page-style.css', "../../styles/customer-create-page-style.css"]
})
export class InvoiceFormComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  loading = false;
  defaultValue = "SENT"

  @Output()
  onNewInvoice = new EventEmitter<any>();

  form = new FormGroup({
    amount: new FormControl(),
    status: new FormControl(),
  });

  onSubmit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.onNewInvoice.emit({amount: this.form.value.amount, status: this.form.value.status, customerId: id});
    this.loading = true;
    this.form.setValue({
      amount: '',
      status: '',
    });
    setTimeout(() => {
      this.router.navigate(['/' + id]);
    }, 1000);

  }
}

