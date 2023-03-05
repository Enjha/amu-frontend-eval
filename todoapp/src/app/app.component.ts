//mdp supabase : projectihmweb1.
import {Component} from '@angular/core';

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
  styleUrls: []
})
export class AppComponent {
}
