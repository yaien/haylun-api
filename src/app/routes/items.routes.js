const controller = require("../controllers/items.controller")
const validations = require("../validations/item.validations")

module.exports = app => {
    app.post("/guest/:guest_id/items", validations.create, controller.create)
    app.delete("/guests/:guest_id/items/:item_id", controller.remove)
    app.param("item_id", controller.param)
}
