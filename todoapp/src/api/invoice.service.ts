import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Invoices } from "../types/invoice";

const SUPABASE_URL = 'https://iryhyftntjfkqyztpgtx.supabase.co/rest/v1/invoices';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeWh5ZnRudGpma3F5enRwZ3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NDY0NjAsImV4cCI6MTk5MzQyMjQ2MH0.TjHQ-aIgbMhP8jbo6-RR0eemRZjHT4f8jnTXJnNTbis";

@Injectable()
export class InvoiceService {

  /**
   * Dans ce service, nous allons envoyer des requêtes HTTP, nous demanderons donc
   * au système d'injection de dépendances d'Angular de nous injecter une instance du HttpClient
   */
  constructor(private http: HttpClient) { }

  /**
   * Récupère l'ensemble des lignes de l'API et retourne un tableau de facture
   */
  findAll(): Observable<Invoices> {
    return this.http.get<Invoices>(SUPABASE_URL, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY
      }
    });
  }

  /**
   * Met à jour le statut d'une facture et retourne la facture mise à jour (dans un tableau contenant une facture)
   */
  changeStatus(id: number, isDone: boolean): Observable<Invoices> {
    return this.http.patch<Invoices>(SUPABASE_URL + '?id=eq.' + id, {
      done: isDone
    }, {
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
  create(text: string): Observable<Invoices> {
    return this.http.post<Invoices>(SUPABASE_URL, {
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
