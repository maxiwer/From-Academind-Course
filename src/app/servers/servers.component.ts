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

  @Input('testInput') data;
  @Input('isPink') isPink = false;

  @HostBinding('class.pink') get color() { return this.isPink };

  @ViewChildren('randomNumber') randomNumber: ElementRef;
  isContentVisible$ = of(true).pipe(delay(5000))

}
