const Product = require("../models/product.model")

exports.create = async (req, res) => {
    try {
        const count = await Product.countDocuments({ name: req.body.name })
        if (count > 0) throw new Error("PRODUCT_ALREADY_EXIST")
        const product = new Product(req.body)
        await product.save()
        res.send(product)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

exports.list = async (req, res, next) => {
    try {
        const query = { name: new RegExp(req.query.search, "i") }
        const products = await Product.find(query)
            .skip(req.query.offset || 0)
            .limit(req.query.limit || 10)
        res.send(products)
    } catch (err) {
        next(err)
    }
}

exports.param = async (req, res, next, id) => {
    try {
        req.product = await Product.findById(id).orFail(Error("PRODUCT_NOT_FOUND"))
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
        if (req.product.published) throw new Error("PRODUCT_IS_PUBLISHED")
        req.product.set(req.body)
        req.product.increment()
        await req.product.save()
        res.send(req.product)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

exports.publish = async (req, res) => {
    try {
        if (!req.product.image) throw new Error("IMAGE_REQUIRED")
        req.product.published = true
        await req.product.save()
        res.send(req.product)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

exports.unpublish = async (req, res, next) => {
    try {
        req.product.published = false
        await req.product.save()
        res.send(req.product)
    } catch (error) {
        next(error)
    }
}

exports.search = async (req, res, next) => {
    try {
        const query = {
            name: new RegExp(req.query.search, "i"),
            published: true
        }
        const products = await Product.find(query)
            .skip(req.query.offset || 0)
            .limit(req.query.limit || 10)
        res.send(products)
    } catch (err) {
        next(err)
    }
}

exports.slug = async (req, res, next, slug) => {
    try {
        req.product = await Product.findOne({ slug, published: true }).orFail(
            Error("PRODUCT_NOT_FOUND")
        )
        next()
    } catch (err) {
        res.status(404).send({ error: err.message })
    }
}
