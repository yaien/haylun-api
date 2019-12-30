const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    ref: { type: mongoose.Types.ObjectId, ref: "Product" },
    name: String,
    image: String,
    slug: String,
    price: Number,
    quantity: Number,
    __v: Number
})

const GuestSchema = new mongoose.Schema({
    active: { type: Boolean, default: true },
    items: [ItemSchema]
})

const GuestModel = mongoose.model("Guest", GuestSchema)

module.exports = GuestModel
