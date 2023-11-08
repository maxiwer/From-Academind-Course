import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {MockService} from "../services/mock.service";
import {delay, tap} from "rxjs/operators";
import {ServersComponent} from "../servers/servers.component";

@Component({
  selector: 'app-child',
  template: '<hr><ng-content></ng-content><hr>',
})
export class ChildComponent {
}

@Component({
  selector: 'app-lorem',
  template: `
    <div>
      <h2>Parent Component</h2>
      <div class="lorem">
        <app-child>
          <h3 #lorem>Lorem ipsum dolor sit amet.</h3>
        </app-child>
      </div>
    </div>
  `,
})
export class LoremComponent implements AfterContentInit {
  @ContentChild('lorem') contentChild: ElementRef;

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('1', this.contentChild.nativeElement);
  }
}
