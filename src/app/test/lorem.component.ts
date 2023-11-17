import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef, ViewChild
} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-child',
  template: '<hr><ng-content></ng-content><hr>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('lorem') contentChild: ElementRef;

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('1', this.contentChild.nativeElement);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    console.log('2', this.contentChild.nativeElement);
  }
}

@Component({
  selector: 'app-lorem',
  template: `
      <div>
          <h2>Parent Component</h2>
          <div class="lorem">
              <app-child>
                  <div #lorem>
                      <h1>Lorem ipsum dolor sit amet.</h1>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <h3 *ngIf="(isContentVisible$ | async)">Lorem ipsum dolor sit amet.</h3>
                      <h4>Lorem ipsum dolor sit amet.</h4>
                      <h5>Lorem ipsum dolor sit amet.</h5>
                  </div>
              </app-child>
          </div>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoremComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(ChildComponent) childComponent: ChildComponent;
  isContentVisible$ = of(true).pipe(delay(5000));

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    console.log(`4`, this.childComponent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(`3`, this.childComponent);
  }
}
