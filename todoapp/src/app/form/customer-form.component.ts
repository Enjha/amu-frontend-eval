import {Component, Output, EventEmitter} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-customer-form-page",
  template: `
      <form id="create-customer" (ngSubmit)="onSubmit()" [formGroup]="form">
          <div id="inputs">
              <div id="input">
                  <label for="fullName">Nom complet:</label>
                  <input
                          type="text"
                          class="form-control"
                          name="fullName"
                          formControlName="fullName"
                          placeholder="ex: Denis Brogniart"
                          id="fullName"
                  />
              </div>
              <div id="input">
                  <label for="email">Email:</label>
                  <input
                          type="email"
                          class="form-control"
                          name="email"
                          formControlName="email"
                          placeholder="ex: denis.b@gmail.com"
                          id="email"
                  />
              </div>
          </div>
          <button class="success-button" id="save">
              <span *ngIf="loading" class="loader"></span>
              <span *ngIf="!loading">Enregistrer</span>
          </button>
      </form>
  `,
  styleUrls: ['../../styles/structure.css', '../../styles/utils.css']
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

