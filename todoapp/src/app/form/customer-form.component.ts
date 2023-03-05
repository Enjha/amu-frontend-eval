import {Component, Output, EventEmitter} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-customer-form-page",
  template: `
    <form id="create-customer" (ngSubmit)="onSubmit()" [formGroup]="form">
      <div id="inputs">
        <input
          type="text"
          class="form-control"
          name="fullName"
          formControlName="fullName"
          placeholder="Nom complet"
        />
        <input
          type="email"
          class="form-control"
          name="email"
          formControlName="email"
          placeholder="Email"
        />
      </div>
      <button id="save">
        <span *ngIf="loading" class="loader"></span>
        <span *ngIf="!loading">Enregistrer</span>
      </button>
    </form>
  `,
  styleUrls: ['../../styles/customer-list-page-style.css', "../../styles/customer-create-page-style.css"]
})
export class CustomerFormComponent {
  constructor(private router: Router) {
  }

  loading = false;

  @Output()
  onNewCustomer = new EventEmitter<any>();

  form = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl()
  });

  onSubmit() {
    this.onNewCustomer.emit({fullName: this.form.value.fullName, email: this.form.value.email});
    this.loading = true;
    this.form.setValue({
      fullName: '',
      email: ''
    });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);

  }
}

