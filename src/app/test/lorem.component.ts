import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef, inject, ViewChild
} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-lorem',
  templateUrl: './lorem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoremComponent implements AfterViewInit, AfterViewChecked {
  private fb = inject(FormBuilder);
  isContentVisible$ = of(true).pipe(delay(5000));
  form = this.fb.group({
    search: ['', Validators.required],
  });

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
  }
}
