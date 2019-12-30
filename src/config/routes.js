const guests = require("../app/routes/guest.routes")
const items = require("../app/routes/items.routes")
const products = require("../app/routes/product.routes")
const token = require("../app/routes/token.routes")
const user = require("../app/routes/user.routes")

module.exports = app => {
    guests(app)
    items(app)
    products(app)
    token(app)
    user(app)
}
