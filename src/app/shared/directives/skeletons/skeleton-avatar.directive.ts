import { Directive, ElementRef, Input } from '@angular/core';
import { BaseSkeletonDirective } from './base-skeleton.directive';

@Directive({
  selector: '[lqhSkeletonAvatar]'
})
export class SkeletonAvatarDirective extends BaseSkeletonDirective {
  @Input('lqhSkeletonAvatar') showSkeleton: boolean;
  constructor(protected el: ElementRef) {
    super(el);
  }

  protected handling(): void {
    this.el.nativeElement.className = this.getClassName(this.el, 'skt-avatar');
  }

}
