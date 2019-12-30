const mongoose = require("mongoose")
const env = require("./env")

exports.connect = () => {
    return mongoose.connect(env.mongodb.uri, {
        useNewUrlParser: true,
        connectTimeoutMS: 360000,
        useUnifiedTopology: true
    })
}
