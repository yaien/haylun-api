const Product = require("../models/product.model")

class CartError extends Error {
    constructor(message, details) {
        super(message)
        this.isCartError = true
        this.details = details
    }

    toObject() {
        return { message: this.message, ...this.details }
    }
}

exports.create = async items => {
    const cart = { total: 0, items: [] }
    for (let item of items) {
        let product = await Product.findOne({ _id: item.product, published: true }).orFail(
            () => new CartError("PRODUCT_NOT_FOUND", { product: item.product })
        )

        if (product.existence < item.quantity) {
            throw new CartError("PRODUCT_OUT_OF_STOCK", {
                product: product.id,
                existence: product.existence
            })
        }

        cart.items.push({
            ref: product._id,
            image: product.image,
            name: product.name,
            quantity: item.quantity,
            price: product.price
        })
    }

    cart.total = cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)

    return cart
}
