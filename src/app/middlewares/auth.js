const jwt = require("../helpers/jwt")
const User = require("../models/user.model")

exports.jwt = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const payload = jwt.verify(token)
        req.user = await User.findById(payload.id).orFail()
        next()
    } catch {
        res.status(401).send()
    }
}
