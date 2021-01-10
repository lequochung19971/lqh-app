import { BaseState } from '../../core/interfaces-abstracts/base-state.abstract';

export class ModeThemeState extends BaseState {
  isLightMode: boolean;
  isDarkMode: boolean;
  isAutoChangeMode: boolean;
  constructor(props?: any) {
    super(props);
  }
}

export const initialState: ModeThemeState = new ModeThemeState({
  isLightMode: true,
  isDarkMode: false,
  isAutoChangeMode: false
} as ModeThemeState)