const mongoose = require("mongoose")
const CartSchema = require("./schemas/cart.schema")

const GuestSchema = new mongoose.Schema({
    active: { type: Boolean, default: true },
    cart: CartSchema
})

const GuestModel = mongoose.model("Guest", GuestSchema)

module.exports = GuestModel
