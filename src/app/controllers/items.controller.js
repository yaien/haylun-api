const Product = require("../models/product.model")

exports.create = async (req, res) => {
    try {
        const product = await Product.findOne({
            _id: req.body.product,
            existence: { $gte: req.body.quantity }
        }).orFail(Error("PRODUCT_NOT_AVAILABLE"))

        req.guest.items.push({
            product: product._id,
            quantity: req.body.quantity
        })

        await req.guest.save()

        res.send(req.guest.cart)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
}

exports.remove = async (req, res, next) => {
    try {
        req.item.remove()
        await req.guest.save()
        res.send(req.guest.items)
    } catch (err) {
        next(err)
    }
}

exports.param = async (req, res, next, id) => {
    try {
        req.item = req.guest.items.id(id)
        if (!req.item) throw Error("ITEM_NOT_FOUND")
        next()
    } catch (err) {
        res.status(404).send({ error: err.message })
    }
}
