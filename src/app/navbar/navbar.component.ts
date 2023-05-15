import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<h1>Navbar component</h1>
    <p>This is a paragraph</p>`,
  styles: [
    `
      h1 {
        color: red;
        font-size: 50px;
      }
      p {
        font-size: 30px;
      }
    `,
  ],
})
export class NavbarComponent {}
