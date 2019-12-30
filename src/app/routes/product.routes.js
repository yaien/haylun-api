const controller = require("../controllers/product.controller")
const validations = require("../validations/product.validations")
const auth = require("../middlewares/auth")

module.exports = app => {
    app.use("/products*", auth.jwt)

    app.route("/products")
        .post(validations.create, controller.create)
        .get(controller.list)

    app.route("/products/:product_id")
        .get(controller.show)
        .put(validations.update, controller.update)

    app.param("product_id", controller.param)
}
