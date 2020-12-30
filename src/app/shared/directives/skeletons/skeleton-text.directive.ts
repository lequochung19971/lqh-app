import { Directive, ElementRef, Input } from '@angular/core';
import { BaseSkeletonDirective } from './base-skeleton.directive';

@Directive({
  selector: '[lqhSkeletonText]',
})
export class SkeletonTextDirective extends BaseSkeletonDirective {
  @Input('lqhSkeletonText') showSkeleton: boolean;

  constructor(protected el: ElementRef) {
    super(el);
  }

  protected handling(): void {
    this.el.nativeElement.className = this.getClassName(this.el, 'skt-text');
  }
}
