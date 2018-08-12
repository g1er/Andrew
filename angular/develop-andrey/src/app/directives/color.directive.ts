import { Directive, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appColor]'
})

export class colorDirective implements OnInit {
    constructor (private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit () {
        this.renderer.setStyle(this.elRef.nativeElement, "color", "#5980c1");
    }
}