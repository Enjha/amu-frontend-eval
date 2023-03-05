// Représentation d'une facture
export type Invoice = {
  id: number;
  amount: number;
  status: string;
  customerId: number;
}

export type Invoices = Invoice[];
