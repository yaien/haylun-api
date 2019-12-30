const Product = require("../models/product.model")

exports.create = async (req, res) => {
    try {
        const product = await Product.findOne({
            _id: req.body.product,
            existence: { $gte: req.body.quantity }
        }).orFail(Error("PRODUCT_NOT_AVAILABLE"))

        if (req.guest.items.find(item => item.product.toHexString() === product.id)) {
            throw Error("PRODUCT_ALREADY_ADDED")
        }

        const item = req.guest.items.create({
            product: product._id,
            quantity: req.body.quantity
        })

        req.guest.items.push(item)

        await req.guest.save()

        res.send(item)
    } catch (err) {
        console.log(err)
        res.status(400).send({ error: err.message })
    }
}

exports.remove = async (req, res, next) => {
    try {
        req.item.remove()
        await req.guest.save()
        res.send(req.item)
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
