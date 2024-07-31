import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-component></app-component>
    <!-- <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a> -->
  `,
  imports: [AppComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
