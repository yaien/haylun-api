const validate = require("../helpers/validate")
const indicative = require("indicative")

const { regex } = indicative.validator.validations

exports.create = validate({
    schema: {
        items: "required|array|min:1",
        "items.*.quantity": "required|integer|above:0",
        "items.*.product": "required|string",
        shipping: "required|object",
        "shipping.name": "required|string",
        "shipping.email": "required|email",
        "shipping.phone": "required|phone",
        "shipping.address": "required|string",
        "shipping.country": "required|string",
        "shipping.city": "required|string",
        "shipping.province": "required|string",
        "shipping.comment": "string"
    }
})
