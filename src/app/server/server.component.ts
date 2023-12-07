import {ChangeDetectionStrategy, Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MockService} from "../services/mock.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerComponent implements OnChanges {
  private router = inject(Router);
  mockService = inject(MockService);

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`~LOREMINPUT`, changes['loremInput'].currentValue);
  }
}
