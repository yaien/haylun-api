const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    production: process.env.NODE_ENV === "production",
    port: process.env.PORT || "8080",
    mongodb: {
        uri: process.env.MONGODB_URI
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        duration: process.env.JWT_DURATION
    }
}
