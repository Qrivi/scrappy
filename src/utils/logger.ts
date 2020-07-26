import { createLogger, format, transports } from 'winston';
import chalk from 'chalk';
import { Config } from '../config';

export default createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.File({
      filename: `${Config.logDirectory}/error.log`, level: 'error'
    }),
    new transports.File({
      filename: `${Config.logDirectory}/app.log`
    }),
    new transports.Console({
      format: format.combine(
        format.printf(({ level, message, timestamp }) => {
          switch (level) {
            case 'error':
              return `${timestamp} ${chalk.bold.red(level.toUpperCase())}: ${message}`;
            case 'warn':
              return `${timestamp} ${chalk.bold.yellow(level.toUpperCase())}: ${message}`;
            case 'info':
              return `${timestamp} ${chalk.bold.blue(level.toUpperCase())}: ${message}`;
            default:
              return `${timestamp} ${chalk.bold(level.toUpperCase())}: ${message}`;
          }
        })
      )
    })
  ]
});
