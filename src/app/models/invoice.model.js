const mongoose = require("mongoose")
const shortid = require("shortid")
const CartSchema = require("./schemas/cart.schema")

const InvoiceSchema = new mongoose.Schema({
    ref: {
        type: String,
        index: true,
        default: () => shortid.generate().toUpperCase()
    },
    cart: CartSchema,
    status: String,
    payment: Object,
    shipping: {
        name: String,
        email: String,
        phone: String,
        address: String,
        country: String,
        city: String,
        provice: String,
        comment: String
    }
})

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema)

module.exports = InvoiceModel
