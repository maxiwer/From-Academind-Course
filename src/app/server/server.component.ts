import {Component, inject, ViewEncapsulation} from '@angular/core';
import {MockService} from "../services/mock.service";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
})
export class ServerComponent {
  lorem = 'HOLA';
  mockService = inject(MockService);

}
