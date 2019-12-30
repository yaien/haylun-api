const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: String,
    existence: Number,
    image: String,
    description: String
})

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel
