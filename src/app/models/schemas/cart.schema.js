const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    ref: { type: mongoose.Types.ObjectId, ref: "Product" },
    name: String,
    quantity: Number
})

const CartSchema = new mongoose.Schema({
    total: Number,
    products: [ProductSchema]
})

module.exports = CartSchema
