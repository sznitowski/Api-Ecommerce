const { createLogger, format, transports, config } = require('winston');

const { combine, splat, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp, ...metadata }) => {
    let msg = `${timestamp} [${level}] : ${message} `
    if (metadata) {
        msg += JSON.stringify(metadata)
    }
    return msg
});

const logger = createLogger({
    format: combine(
        format.colorize(),
        splat(),
        myFormat
    ),
    transports: [
        new transports.File({
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            filename: `${__dirname}/logs/api.log`,
            format: combine(
                timestamp(),
                format.prettyPrint(
                    format.json(),
                    exitOnError = false
                ),
            )
        }),
        new transports.Console({
            format: format.combine(
                format.json(),
                format.colorize(),
                format.simple()
            )
        })
    ]
});

module.exports = { logger }