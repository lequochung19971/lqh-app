import { Directive, ElementRef, Input } from '@angular/core';
import { BaseSkeletonDirective } from './base-skeleton.directive';

@Directive({
  selector: '[lqhSkeletonMultipleText]'
})
export class SkeletonMultipleTextDirective extends BaseSkeletonDirective{
  @Input('lqhSkeletonMultipleText') showSkeleton: boolean;
  constructor(protected el: ElementRef) { 
    super(el);
  }

  protected handling(): void {
    this.el.nativeElement.className = this.getClassName(this.el, 'skt-multiple-texts');
  }

}
