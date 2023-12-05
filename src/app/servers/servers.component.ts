import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";
import {MockService} from "../services/mock.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServersComponent {
  mockService = inject(MockService);

  isContentVisible$ = of(true).pipe(delay(5000))
  items$: any = this.mockService.simulateHttp([ 1, 2, 3, 4, 5 ], 1500);
  lorem =  { label: '', order: 0 };
  order = this.lorem.order;
  secondExample: any;

  loremMethod() {
    this.lorem = {...this.lorem, order: ++this.order };
  }
}
