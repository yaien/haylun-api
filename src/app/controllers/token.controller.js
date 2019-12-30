const env = require("../../config/env")
const jwt = require("../helpers/jwt")
const User = require("../models/user.model")

exports.token = async (req, res) => {
    try {
        if (req.body.client_id != env.client.id) {
            throw new Error("INVALID_CLIENT")
        }

        const user = await User.findOne({ email: req.body.username }).orFail(
            () => new Error("USER_NOT_FOUND")
        )

        if (!(await user.checkPassword(req.body.password))) {
            throw new Error("INVALID_PASSWORD")
        }

        res.send({
            access_token: jwt.sign({ id: user.id }),
            token_type: "Bearer",
            expires_in: jwt.duration
        })
    } catch (error) {
        res.status(401).send({ error: error.message })
    }
}
