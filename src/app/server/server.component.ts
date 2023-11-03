import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
    <h1>Hello World!</h1>
    <span class="red">Shadow DOM Rocks!</span>
  `,
  styles: [`
    :host {
      display: flex;
      gap: 10rem;
      border: 1px solid black;
    }
    h1 {
      color: blue;
    }
    .red {
      background-color: red;
    }

  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerComponent {
  lorem = 'HOLA';

}
