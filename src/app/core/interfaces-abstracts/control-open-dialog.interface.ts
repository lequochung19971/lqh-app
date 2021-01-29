import { DialogConfig } from './dialog-config.interface';

export interface ControlOpenDialog {
  dialogConfig: DialogConfig;
  openDialog(): void;
}
