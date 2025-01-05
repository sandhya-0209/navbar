import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleList]'
})
export class ToggleListDirective {
  constructor(
    private _eleRef : ElementRef,
    private _renderer : Renderer2
  ) { }
  @HostListener('click')
  onToggleBtn(eve:Event){
    const secondChild = this._eleRef.nativeElement.children[1];
    if(secondChild.classList.contains('show')){
      this._renderer.removeClass(secondChild,'show')
    }else{
      this._renderer.addClass(secondChild,'show')
    }
  }
}
