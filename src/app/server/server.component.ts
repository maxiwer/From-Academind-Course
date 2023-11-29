import {Component, inject, ViewEncapsulation} from '@angular/core';
import {MockService} from "../services/mock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
})
export class ServerComponent {
  private router = inject(Router);
  mockService = inject(MockService);
  inputLorem = this.router.events.pipe();
}
