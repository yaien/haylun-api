const express = require("./config/express")
const mongoose = require("./config/mongoose")
const env = require("./config/env")
const logger = require("./config/logger")

async function init() {
    await mongoose.connect()
    const app = express()
    app.listen(env.port, () => {
        logger.info(`Server listening on port ${env.port}`)
    })
}

init()
