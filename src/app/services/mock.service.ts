import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MockService {
  simulateHttp(val: any, delayTime: number) {
    return of(val).pipe(delay(delayTime));
  }
}
