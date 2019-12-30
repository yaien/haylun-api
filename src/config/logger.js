const winston = require("winston")
const env = require("./env")

const { Console, File } = winston.transports
const { combine, errors, colorize, simple, json, timestamp } = winston.format

const dev = () =>
    winston.createLogger({
        format: combine(colorize(), simple(), errors({ stack: true })),
        transports: [new Console()]
    })

const prod = () =>
    winston.createLogger({
        format: combine(json(), errors({ stack: true }), timestamp()),
        level: "error",
        transports: [
            new File({
                dirname: "logs",
                filename: "error.log"
            })
        ]
    })

module.exports = env.production ? prod() : dev()
