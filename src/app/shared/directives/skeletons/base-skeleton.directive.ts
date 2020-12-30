import { Directive, AfterViewInit, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[lqhBaseSkeleton]'
})
export abstract class BaseSkeletonDirective implements OnInit, AfterViewInit {
  @Input() showSkeleton: boolean;
  private changes: MutationObserver;

  constructor(protected el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.detectDOMHasValue();
    this.handling();
  }

  protected abstract handling(): void; 

  protected detectDOMHasValue() {
    this.changes = new MutationObserver((_mutations: MutationRecord[]) => {
      this.handling();
    });

    this.changes.observe(this.el.nativeElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  protected getClassName(el: ElementRef, neededClassName: string): string {
    if (!this.showSkeleton) {
      this.disconnectChanges();
      return this.removeClassName(el.nativeElement.className, neededClassName);
    } 

    if (this.showSkeleton) {
      return this.addClassName(el.nativeElement.className, neededClassName);
    }

    return el.nativeElement.className.trim();
  }

  protected addClassName(currentClassName: string, neededClassName: string) {
    const isExistedClassName = currentClassName.includes(neededClassName)
    if (!isExistedClassName) {
      return (`${currentClassName} ${neededClassName}`).trim()
    }

    return currentClassName.trim();
  }

  protected removeClassName(currentClassName: string, neededClassName: string) {
    const isExistedClassName = currentClassName.includes(neededClassName)
    if (isExistedClassName) {
      return currentClassName.replace(neededClassName, '') .trim();
    }

    return currentClassName.trim();
  }

  disconnectChanges(): void {
    this.changes.disconnect();
  }

  ngOnDestroy(): void {
    this.disconnectChanges();
  }
}
