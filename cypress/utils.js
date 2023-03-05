// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://localhost:4200/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://iryhyftntjfkqyztpgtx.supabase.co/rest/v1";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeWh5ZnRudGpma3F5enRwZ3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NDY0NjAsImV4cCI6MTk5MzQyMjQ2MH0.TjHQ-aIgbMhP8jbo6-RR0eemRZjHT4f8jnTXJnNTbis";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });
};
