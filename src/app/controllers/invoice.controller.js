const Invoice = require("../models/invoice.model")
const Product = require("../models/product.model")
const cart = require("../helpers/cart")
const constants = require("../../config/constants")

exports.create = async (req, res) => {
    try {
        const invoice = new Invoice({
            cart: await cart.create(req.body.items),
            shipping: req.body.shipping,
            status: constants.invoice.pending,
            guest: req.guest._id
        })
        await invoice.save()
        res.send(invoice)
    } catch (err) {
        if (typeof err.toObject === "function") return res.status(400).send(err.toObject())
        return res.status(400).send({ message: err.message })
    }
}
