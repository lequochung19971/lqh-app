import { AfterViewInit, OnChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lqh-avatar',
  templateUrl: './lqh-avatar.component.html',
  styleUrls: ['./lqh-avatar.component.scss']
})
export class LqhAvatarComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() imageSrc: string;
  @Input() imageSize: AvatarSize;
  avatarId: string;
  url: string;
  currentAvatar: HTMLElement;
  
  constructor() { }
  get avatarSize() {
    const sizes = [AvatarSize.large, AvatarSize.medium, AvatarSize.small, AvatarSize.standard];

    if (sizes.indexOf(this.imageSize) === -1) {
      return AvatarSize.standard;
    }

    return this.imageSize;
  }
  ngOnChanges(): void {
    this.initAvatar();
  }

  ngOnInit(): void {
  }

  initAvatar(): void {
    const avtId = this.generateAvatarId();
    this.currentAvatar = document.getElementById(avtId);
    if (!this.currentAvatar) { this.avatarId = avtId; }

    if (this.imageSrc) {
      this.url = `../../assets/${this.imageSrc}`
    }
  }

  generateAvatarId(): string {
    const srcId = this.imageSrc.split('/').join('-');
    return `lqh-avatar-${srcId}-${Math.random()}`;
  }

  ngAfterViewInit(): void {
    this.generateUrl();
  }

  generateUrl() {
    this.currentAvatar = this.currentAvatar ? this.currentAvatar : document.getElementById(this.avatarId);
    this.currentAvatar.style.backgroundImage = `url(${this.url})`;
  }
}

export enum AvatarSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
  standard = 'standard'
}
