const guests = require("../app/routes/guest.routes")
const items = require("../app/routes/items.routes")

module.exports = app => {
    guests(app)
    items(app)
}
