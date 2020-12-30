import { LoggerLevel } from '../../core/enums/logger-level.enum';

const production: boolean = false;

export const log = (message: any, params?: any): void => {
  logger(message, params, LoggerLevel.LOG);
}

export const warn = (message: any, params?: any): void => {
  logger(message, params, LoggerLevel.WARN);
}

export const error = (message: any, params?: any): void => {
  logger(message, params, LoggerLevel.ERROR);
}

export const info = (message: any, params?: any): void => {
  logger(message, params, LoggerLevel.INFO);
}

export const debug = (message: any, params?: any): void => {
  logger(message, params, LoggerLevel.DEBUG);
}

const logger = (message: any, params = '', level = LoggerLevel.LOG) => {
  if (!production) {
    switch (level) {
      case LoggerLevel.LOG:
        console.log(message, params);
        break;

      case LoggerLevel.WARN:
        console.warn(message, params);
        break;

      case LoggerLevel.ERROR:
        console.error(message, params);
        break;

      case LoggerLevel.INFO:
        console.info(message, params);
        break;

      case LoggerLevel.DEBUG:
        console.debug(message, params);
        break;
      default:
        break;
    }
  }
}
