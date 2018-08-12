import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective implements OnInit{

  constructor(private fontRef: ElementRef, private fontRenderer: Renderer2) {}

  ngOnInit() {
    this.fontRenderer.setStyle(this.fontRef.nativeElement, "fontFamily", "Century Gothic");
  }

}
