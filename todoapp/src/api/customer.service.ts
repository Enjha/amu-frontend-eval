import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customers } from "../types/customer";

const SUPABASE_URL = 'https://iryhyftntjfkqyztpgtx.supabase.co/rest/v1/customers';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeWh5ZnRudGpma3F5enRwZ3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NDY0NjAsImV4cCI6MTk5MzQyMjQ2MH0.TjHQ-aIgbMhP8jbo6-RR0eemRZjHT4f8jnTXJnNTbis";

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère l'ensemble des lignes de l'API et retourne un tableau de clients
   */
  findAll(): Observable<Customers> {
    return this.http.get<Customers>(SUPABASE_URL, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY
      }
    });
  }

  /**
   * Créé un client auprès de l'API qui nous retournera un tableau contenant le client
   * nouvellement créé
   */
  create(text: string): Observable<Customers> {
    return this.http.post<Customers>(SUPABASE_URL, {
      text: text,
      done: false
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
      }
    });
  }
}
