const validate = require("../helpers/validate")

exports.create = validate({
    schema: {
        product: "string|required",
        quantity: "integer|min:1"
    }
})