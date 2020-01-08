const mongoose = require("mongoose")
const shortid = require("shortid")

const InvoiceSchema = new mongoose.Schema({
    ref: {
        type: String,
        index: true,
        default: () => shortid.generate().toUpperCase()
    },
    cart: {
        total: Number,
        items: [
            {
                ref: { type: mongoose.Types.ObjectId, ref: "Product" },
                image: String,
                name: String,
                quantity: Number,
                price: Number
            }
        ]
    },
    shipping: {
        name: String,
        email: String,
        phone: String,
        address: String,
        country: String,
        city: String,
        provice: String,
        comment: String
    },
    status: String,
    payment: Object,
    guest: { type: mongoose.Types.ObjectId, ref: "Guest" }
})

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema)

module.exports = InvoiceModel
