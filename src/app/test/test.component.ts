import {Component, inject, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {delay} from "rxjs-compat/operator/delay";
import {MockService} from "../services/mock.service";
import {tap} from "rxjs/operators";

@Component({
  selector: '[app-not-server]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private mockService = inject(MockService);

  lorem$ = new Observable();

  ngOnInit() {
    this.lorem$ = this.mockService.simulateHttp(new Array(100).fill(100).map(el => Math.random() * el | 0), 2500).pipe();
  }
}
