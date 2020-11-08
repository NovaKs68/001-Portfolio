require('../config/database');
const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new (winston.transports.DailyRotateFile)({
    filename: './server/log/%DATE%.log',
    datePattern: 'MMDD',
    zippedArchive: true,
    maxFiles: '7d',
    level: 'debug',

});


const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(i => `${i.timestamp} | ${i.level} | ${i.message}`)
    ),
    transports: [
        transport
    ]
});
