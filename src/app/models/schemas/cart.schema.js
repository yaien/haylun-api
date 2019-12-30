const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    ref: { type: mongoose.Types.ObjectId, ref: "Product" },
    name: String,
    quantity: Number,
    price: Number
})

const CartSchema = new mongoose.Schema({
    total: Number,
    products: [ProductSchema]
})

CartSchema.method("compute", function() {
    this.total = this.products.reduce(
        product => product.price * product.quantity
    )
})

module.exports = CartSchema
