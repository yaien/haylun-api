const guest = require("../controllers/guest.controller")

module.exports = app => {
    app.post("/guests/", guest.create)
    app.get("/guests/:guest_id/", guest.show)
    app.param("guest_id", guest.param)
}
