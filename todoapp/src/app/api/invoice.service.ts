import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Invoices} from "../types/invoice";

const SUPABASE_URL = 'https://iryhyftntjfkqyztpgtx.supabase.co/rest/v1/invoices';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeWh5ZnRudGpma3F5enRwZ3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NDY0NjAsImV4cCI6MTk5MzQyMjQ2MH0.TjHQ-aIgbMhP8jbo6-RR0eemRZjHT4f8jnTXJnNTbis";

@Injectable()
export class InvoiceService {

  constructor(private http: HttpClient) {
  }

  /**
   * Récupère les factures dont l'identifiant du client correspond
   */
  findByCustomerId(id: number): Observable<Invoices> {
    return this.http.get<Invoices>(SUPABASE_URL + '?customerId=eq.' + id, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
      }
    });
  }

  /**
   * Créé une facture auprès de l'API qui nous retournera un tableau contenant la facture
   * nouvellement créée
   */
  create(obj: any): Observable<Invoices> {
    return this.http.post<Invoices>(SUPABASE_URL, {
      amount: obj.amount * 100,
      status: obj.status,
      customerId: obj.customerId
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
      }
    });
  }
}
