const controller = require("../controllers/invoice.controller")
const validations = require("../validations/invoice.validations")

module.exports = app => {
    app.post("/guests/:guest_id/invoice", validations.create, controller.create)
}
