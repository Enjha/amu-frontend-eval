import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { of } from "rxjs";
import {CustomerListPageComponent} from "../page/customer-list-page.component";
import {CustomerService} from "../api/customer.service";
import {CustomerFormComponent} from "../form/customer-form.component";

describe("CustomerListPageComponent", () => {
  let fixture: ComponentFixture<CustomerListPageComponent>;
  let fixture_form: ComponentFixture<CustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CustomerListPageComponent,
        CustomerFormComponent
      ],
      providers: [CustomerService],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListPageComponent);
    fixture_form = TestBed.createComponent(CustomerFormComponent);
  });

  it('should call CustomerService and display returned customers', () => {
    const service = TestBed.inject(CustomerService);
    const findAllSpy = spyOn(service, "findAll");

    findAllSpy.and.returnValue(of([
      { id: 1, fullName: "Joseph Dupont", email: "joseph@mail.com" },
      { id: 2, fullName: "Elise Dupont", email: "elise@mail.com" }
    ]));

    fixture.detectChanges();

    expect(findAllSpy).toHaveBeenCalled();

    expect(fixture.debugElement.queryAll(By.css('#customer')).length).toBe(2);
  });

  it('should call CustomerService, and display created customer', () => {
    const service = TestBed.inject(CustomerService);
    const submitSpy = spyOn(service, "create")

    fixture_form.componentInstance.form.setValue({fullName: "Joseph Dupont", email: "joseph.d@gmail.com"})
    fixture_form.debugElement.query(By.css("#save")).triggerEventHandler('click', {})

    fixture_form.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#customer')).length).toBe(1);
  });


});
