import { ActionReducer } from '../../core/interfaces-abstracts/base-reducer.interface';
import { ModeThemeAction, ModeThemeActionType } from '../actions/mode-theme.action';
import { ModeThemeState } from '../states/mode-theme.state';

export class ModeThemeActionReducer implements ActionReducer {
  reduce({state, action}: {state: ModeThemeState, action: ModeThemeAction}) {
    switch (action.type) {
      case ModeThemeActionType.DARK_MODE: {
        return { ...state, isDarkMode: action.payload };
      }
  
      case ModeThemeActionType.LIGHT_MODE: {
        return { ...state, isLightMode: action.payload };
      }

      case ModeThemeActionType.AUTO: {
        return { ...state, auto: action.payload }
      }

      default: {
        return state;
      }
    }
  }
}
