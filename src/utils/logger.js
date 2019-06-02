// @format
// @flow

export default class Logger {
  static info = (message?: string, ...optionalArgs: any[]) => {
    console.log(message, optionalArgs);
  };

  static error = (message?: string, ...optionalArgs: any[]) => {
    console.error(message, optionalArgs);
  };
}
