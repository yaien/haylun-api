const controller = require("../controllers/product.controller")
const validations = require("../validations/product.validations")
const auth = require("../middlewares/auth")

module.exports = app => {
    app.use("/products*", auth.jwt)

    app.route("/products")
        .post(validations.create, controller.create)
        .get(validations.search, controller.list)

    app.route("/products/:product_id")
        .get(controller.show)
        .put(validations.update, controller.update)

    app.patch("/products/:product_id/publish", controller.publish)
    app.patch("/products/:product_id/unpublish", controller.unpublish)

    app.get("/external/products", validations.search, controller.search)
    app.get("/external/products/:product_slug", controller.show)

    app.param("product_id", controller.param)
    app.param("product_slug", controller.slug)
}
