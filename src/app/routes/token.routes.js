const controller = require("../controllers/token.controller")
const validations = require("../validations/token.validations")

module.exports = app => {
    app.post("/auth/token", validations.token, controller.token)
}
