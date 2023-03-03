// Représentation d'une facture
import {Customer} from "./customer";

export type Invoice = {
  id: number;
  amount: number;
  status: string;
  customer_id: number;
}

export type Invoices = Invoice[];
