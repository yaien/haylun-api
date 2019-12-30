const Product = require("../models/product.model")

exports.create = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        res.send(product)
    } catch (err) {
        next(err)
    }
}

exports.list = async (req, res, next) => {
    try {
        const products = await Product.find({
            name: new RegExp(req.query.search, "i")
        })
        res.send(products)
    } catch (err) {
        next(err)
    }
}

exports.param = async (req, res, next, id) => {
    try {
        req.product = await Product.findById(id).orFail(
            Error("PRODUCT_NOT_FOUND")
        )
        next()
    } catch (err) {
        res.status(404).send({ error: err.message })
    }
}

exports.show = (req, res) => {
    res.send(req.product)
}

exports.update = async (req, res, next) => {
    try {
        req.product.set(req.body)
        await req.product.save()
        res.send(req.product)
    } catch (err) {
        next(err)
    }
}
