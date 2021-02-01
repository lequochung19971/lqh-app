import { SkeletonTextDirective } from './skeletons/skeleton-text.directive';
import { SkeletonAvatarDirective } from './skeletons/skeleton-avatar.directive';
import { SkeletonMultipleTextDirective } from './skeletons/skeleton-multiple-text.directive';
import { PreventCharDirective } from './prevent-char.directive';
import { InputDateDirective } from './input-date.directive';
import { DisabledControlDirective } from './disable-control.directive';
import { InputLetterDirective } from './input-letter.directive';
import { InputNumberDirective } from './input-number.directive';
import { DoubleClickDirective } from './double-click.directive';

export const allDirective = [
  SkeletonTextDirective,
  SkeletonMultipleTextDirective,
  SkeletonAvatarDirective,
  PreventCharDirective,
  DisabledControlDirective,
  InputLetterDirective,
  InputDateDirective,
  InputNumberDirective,
  DoubleClickDirective
];

