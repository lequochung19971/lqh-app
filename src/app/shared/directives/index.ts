import { SkeletonTextDirective } from './skeletons/skeleton-text.directive';
import { SkeletonAvatarDirective } from './skeletons/skeleton-avatar.directive';
import { SkeletonMultipleTextDirective } from './skeletons/skeleton-multiple-text.directive';
import { PreventCharDirective } from './prevent-char.directive';
import { InputDateDirective } from './input-date.directive';
import { DisableControlDirective } from './disable-control.directive';

export const allDirective = [
  SkeletonTextDirective,
  SkeletonMultipleTextDirective,
  SkeletonAvatarDirective,
  PreventCharDirective,
  InputDateDirective,
  DisableControlDirective
]