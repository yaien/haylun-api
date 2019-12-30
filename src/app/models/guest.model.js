const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    product: { type: mongoose.Types.ObjectId, ref: "Product" },
    quantity: Number
})

const GuestSchema = new mongoose.Schema({
    active: { type: Boolean, default: true },
    items: [ItemSchema]
})

const GuestModel = mongoose.model("Guest", GuestSchema)

module.exports = GuestModel
