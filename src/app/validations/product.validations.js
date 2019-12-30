const validate = require("../helpers/validate")

exports.create = validate({
    schema: {
        name: "string|required",
        price: "integer|min:10000|required",
        description: "string",
        image: "url",
        existence: "integer|min:0|required"
    }
})

exports.update = validate({
    schema: {
        name: "string",
        price: "integer|min:10000",
        description: "string",
        image: "url",
        existence: "integer|min:0"
    }
})
