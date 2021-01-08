import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lqh-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() variant: string;
  @Input() radius: string;
  @Input() isLoading: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  getStyle() {
    switch (this.variant) {
      case VariantSkeleTon.text: {
        return {
          'height': '1rem',
          'width': this.getWidth(),
          'border-radius': this.getBorderRadius()
        }
      }

      case VariantSkeleTon.rect: {
        return {
          'height': this.getHeight(),
          'width': this.getWidth(),
          'border-radius': this.getBorderRadius()
        }
      }

      case VariantSkeleTon.circle: {
        return {
          'height': this.getHeight(),
          'width': this.getWidth(),
          'border-radius': '50%'
        }
      }

      default:
        break;
    }
  }

  getHeight(): string {
    if (typeof this.height === 'number') {
      return `${this.height}px`
    }

    return this.height || '';
  }

  getWidth(): string {
    if (typeof this.width === 'number') {
      return `${this.width}px`
    }

    return this.width || '';
  }

  getBorderRadius(): string {
    if (typeof this.radius === 'number') {
      return `${this.radius}px`
    }

    return this.radius || '';
  }
}

export enum VariantSkeleTon {
  text = 'text',
  circle = 'circle',
  rect = 'rect'
}
