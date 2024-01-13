import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    hasOpenClass: boolean = false;
    
    constructor(private elRef: ElementRef,
                private renderer: Renderer2) {}

    @HostListener('document:click', ['$event'])
    clickOutside(event: Event) {
        if (!this.elRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.elRef.nativeElement, 'open');
            this.hasOpenClass = false
        }
    }

    @HostListener('click') toggleDropdown() {
        if (this.hasOpenClass) {
            this.renderer.removeClass(this.elRef.nativeElement, 'open')
        } else {
            this.renderer.addClass(this.elRef.nativeElement, 'open')
        }
        this.hasOpenClass = !this.hasOpenClass
    }
}