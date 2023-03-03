//mdp supabase : projectihmweb1.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
        <h1 id="global-title">Customer Manager</h1>
        <main>
          <router-outlet></router-outlet>
        </main>
    </div>
  `,
  // Les styles nous permettent de créer des styles CSS *scopés*,
  // C'est-à-dire que les règles définies ici ne s'appliqueront que sur
  // le template de ce composant, et pas en dehors
  styleUrls: []
})
export class AppComponent { }
