import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  constructor(
    private _eleRef : ElementRef,
    private _renderer : Renderer2
  ) { }

  @HostListener('click')
  onToggleBtn(eve:Event){
    const nextSibling = this._eleRef.nativeElement.nextElementSibling;
    if(nextSibling.classList.contains('show')){
      this._renderer.removeClass(nextSibling,'show')
    }else{
      this._renderer.addClass(nextSibling,'show')
    }
  }
}
