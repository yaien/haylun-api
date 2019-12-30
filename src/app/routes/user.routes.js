const controller = require("../controllers/user.controller")
const auth = require("../middlewares/auth")

module.exports = app => {
    app.get("/user", auth.jwt, controller.current)
}
