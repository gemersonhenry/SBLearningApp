export class Logger {
  static isEnabledLogger = true;

  static log(value: any) {
    if (Logger.isEnabledLogger) {
      console.log(value);
    }
  }
}
