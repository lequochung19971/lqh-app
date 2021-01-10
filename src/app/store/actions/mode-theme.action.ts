import { BaseAction } from '../../core/interfaces-abstracts/base-action.interface';
export enum ModeThemeActionType {
  LIGHT_MODE = '@ModeTheme/Light',
  DARK_MODE = '@ModeTheme/Dark',
  AUTO = '@ModeTheme/Auto'
}

export class UpdateLightMode implements BaseAction {
  readonly type = ModeThemeActionType.LIGHT_MODE;
  constructor(readonly payload: any) {}
}

export class UpdateDarkMode implements BaseAction {
  readonly type = ModeThemeActionType.DARK_MODE;
  constructor(readonly payload: any) {}
}

export class AutoChangeMode implements BaseAction {
  readonly type = ModeThemeActionType.AUTO;
  constructor(readonly payload: any) {}
}

export type ModeThemeAction = UpdateDarkMode | UpdateLightMode | AutoChangeMode;