import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit {
  @Input('testInput') data;
  @ViewChildren('randomNumber') randomNumber: ElementRef;
  isContentVisible$ = of(true).pipe(delay(5000));

  constructor() {
    console.log(`~constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`~on_changes: `, changes['data']);
  }

  ngOnInit() {
    console.log(`~on_init`);
  }

  ngDoCheck(): void {
    console.log(`~do_check`);
  }

  ngAfterViewInit(): void {
    console.log(`~after_view_init`);
  }

  ngAfterContentInit(): void {
    console.log(`~after_content_init`);
  }

}
