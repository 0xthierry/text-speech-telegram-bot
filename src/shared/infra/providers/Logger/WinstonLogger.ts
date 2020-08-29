import winston from 'winston';

export const logger = winston.createLogger({
  transports: [new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
      winston.format.timestamp(),
    ),
  })],
  silent: process.env.NODE_ENV === 'testing'
});

