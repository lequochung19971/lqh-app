import { DialogConfig } from "./dialog-config.interface";

export interface ControlOpenDialog {
  openDialog(): void;
  dialogConfig: DialogConfig;
}