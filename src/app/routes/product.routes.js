const controller = require("../controllers/product.controller")
const validations = require("../validations/product.validations")

module.exports = app => {
    app.route("/products")
        .post(validations.create, controller.create)
        .get(controller.list)

    app.route("/products/:product_id")
        .get(controller.show)
        .put(validations.update, controller.update)

    app.param("product_id", controller.param)
}
