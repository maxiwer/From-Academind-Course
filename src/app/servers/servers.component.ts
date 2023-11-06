import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild, ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ServersComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input('testInput') data: Observable<any>;
  @ViewChildren('randomNumber') randomNumber: ElementRef;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
    this.randomNumber['last'] && this.randomNumber['last']['nativeElement'].scrollIntoView();
  }

}
