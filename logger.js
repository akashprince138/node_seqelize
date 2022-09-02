const winston = require("winston");
require("winston-daily-rotate-file");
const { transports, createLogger, format } = require("winston");

const dashLog = new winston.transports.DailyRotateFile({
  filename: "./logs/dash-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
});

const dash = winston.createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    dashLog,
    new winston.transports.Console({
      colorize: true,
    }),
  ],
});

module.exports = {
  dashLogger: dash,
};
