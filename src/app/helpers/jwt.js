const ms = require("ms")
const jwt = require("jsonwebtoken")
const env = require("../../config/env")

exports.sign = data => {
    return jwt.sign(data, env.jwt.secret, {
        expiresIn: env.jwt.duration
    })
}

exports.verify = token => {
    return jwt.verify(token, env.jwt.secret)
}

exports.duration = Math.floor(ms(env.jwt.duration) / 1000)
