const validate = require("../helpers/validate")

exports.create = validate({
    schema: {
        name: "string|required",
        price: "integer|above:10000|required",
        description: "string",
        image: "url",
        existence: "integer|above:0|required"
    }
})

exports.update = validate({
    schema: {
        name: "string",
        price: "integer|above:10000",
        description: "string",
        image: "url",
        existence: "integer|above:0"
    }
})

exports.search = validate({
    from: "query",
    schema: {
        search: "string",
        offset: "integer|above:-1",
        limit: "integer|above:0"
    }
})
