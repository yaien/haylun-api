const mongoose = require("mongoose")
const slug = require("slug")

const ProductSchema = new mongoose.Schema({
    name: String,
    existence: Number,
    image: String,
    description: String,
    price: Number,
    published: Boolean,
    slug: { type: String, index: true }
})

ProductSchema.pre("save", function() {
    this.slug = slug(this.name, { lower: true })
})

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel
