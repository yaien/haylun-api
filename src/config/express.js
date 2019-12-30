const express = require("express")
const morgan = require("morgan")
const compression = require("compression")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const env = require("./env")
const routes = require("./routes")

module.exports = () => {
    const app = express()

    if (env.production) {
        app.use(compression())
        app.use(helmet())
    } else {
        app.use(morgan("dev"))
    }

    app.use(bodyParser.json())

    routes(app)
    return app
}
