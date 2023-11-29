import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  ElementRef, HostBinding, inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";
import {MockService} from "../services/mock.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  mockService = inject(MockService);

  isContentVisible$ = of(true).pipe(delay(5000))
  items$: any = this.mockService.simulateHttp([ 1, 2, 3, 4, 5 ], 1500);

}
