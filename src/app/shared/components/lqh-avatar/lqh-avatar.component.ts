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
  @Input() firstName: string = 'Hung';
  @Input() lastName: string = 'Le';
  avatarId: string;
  url: string;
  currentAvatar: HTMLElement;
  textAvatar: string = `${this.firstName[0]}${this.lastName[0]}`;
  
  constructor() { }
  get avatarSize() {
    const sizes = [AvatarSize.large, AvatarSize.medium, AvatarSize.small, AvatarSize.standard];

    if (sizes.indexOf(this.imageSize) === -1) {
      return AvatarSize.standard;
    }

    return this.imageSize;
  }

  ngOnChanges(): void {
    this.initAvatarId();
    this.initAvatarUrl();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.currentAvatar = this.currentAvatar || document.getElementById(this.avatarId);
    if (this.url) {
      this.generateBackgroundImage(this.currentAvatar);
    } else {
      this.generateBackgroundText(this.currentAvatar);
    }
  }

  initAvatarId(): void {
    const avtId = this.generateAvatarId();
    this.currentAvatar = document.getElementById(avtId);
    if (!this.currentAvatar) { 
      this.avatarId = avtId; 
    }
  }

  generateAvatarId(): string {
    if (this.imageSrc) {
      const id = this.imageSrc.split('/').join('-');
      return `lqh-avatar-${id}-${Math.random()}`;
    } else {
      return `lqh-avatar-${this.firstName}-${this.lastName}-${Math.floor(Math.random() * 1000000)}`
    }
  }

  initAvatarUrl(): void {
    if (this.imageSrc) {
      this.url = `../../assets/${this.imageSrc}`
    }
  }

  generateBackgroundImage(currentAvatar: HTMLElement) {
    currentAvatar.style.backgroundImage = `url(${this.url})`;
  }

  generateBackgroundText(currentAvatar: HTMLElement) {
    currentAvatar.style.setProperty('--red', this.randomColorRGB());
    currentAvatar.style.setProperty('--green', this.randomColorRGB());
    currentAvatar.style.setProperty('--blue', this.randomColorRGB());
  }

  randomColorRGB(): string {
    return Math.floor(Math.random() * 256).toString();
  }
}

export enum AvatarSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
  standard = 'standard'
}
