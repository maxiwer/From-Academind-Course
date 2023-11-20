import {Directive, ElementRef, HostBinding, HostListener, inject, Renderer2} from '@angular/core';

@Directive({
  selector: '[formControl]'
})
export class HighlightDirective {
  private renderer = inject(Renderer2);
  private elRef = inject(ElementRef);

  @HostBinding('style.border') border =  '10px solid white';

  @HostListener('mouseenter') on() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.border = '10px solid gray';
  }

  @HostListener('mouseleave') off() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.border = '10px solid black';
  }
}
