import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` 
  <h1>This is my first Angular app</h1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
