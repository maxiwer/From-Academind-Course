import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MockService {
  lorem = new BehaviorSubject(1);

  simulateHttp(val: any, delayTime: number) {
    return of(val).pipe(delay(delayTime));
  }
}
