import { Input } from '@angular/core';
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() primaryColor: string = 'blue';
  @Input() secondaryColor: string = 'white';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.secondaryColor;
  @HostBinding('style.color') color: string = this.primaryColor;

  constructor(private renderer: Renderer2,
              private elRef: ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.secondaryColor;
    this.color = this.primaryColor
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
    this.backgroundColor = this.primaryColor;
    this.color = this.secondaryColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
    this.backgroundColor = this.secondaryColor;
    this.color = this.primaryColor
  }
}