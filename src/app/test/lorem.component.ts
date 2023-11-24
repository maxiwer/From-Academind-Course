import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef, inject, OnInit, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MockService} from "../services/mock.service";
@Component({
  selector: 'app-lorem',
  templateUrl: './lorem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoremComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private fb = inject(FormBuilder);
  private mockService = inject(MockService);
  isContentVisible$ = of(true).pipe(delay(5000));
  form = this.fb.group({
    search: ['', Validators.required],
  });

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    console.log(this.mockService.lorem);
  }

  ipsum() {
    this.mockService.lorem.next(23);
  }
}
