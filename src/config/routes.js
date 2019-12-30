const guests = require("../app/routes/guest.routes")
const items = require("../app/routes/items.routes")
const products = require("../app/routes/product.routes")

module.exports = app => {
    guests(app)
    items(app)
    products(app)
}
