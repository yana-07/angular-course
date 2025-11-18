import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {
  visible = false;
  
  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContaierRef: ViewContainerRef) {}

  @Input('ngxUnless') set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContaierRef.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContaierRef.clear();
      this.visible = false;
    }
  }
}
