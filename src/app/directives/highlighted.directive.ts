import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {
  @Input('highlighted') isHighlighted = false;
  @Output() toggleHighlight = new EventEmitter<boolean>();

  constructor() { }

  @HostBinding('class.highlighted') 
  get cssHighlightedClass() {
    return this.isHighlighted;
  }

  // @HostBinding('attr.disabled') 
  // get disabledAttribute() {
  //   return true;
  // }

  @HostListener('mouseover', ['$event']) 
  onMouseOver($event: MouseEvent) {
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave') 
  onMouseOut() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
