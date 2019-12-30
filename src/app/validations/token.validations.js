const validate = require("../helpers/validate")

exports.token = validate({
    schema: {
        grant_type: "required|in:password",
        client_id: "required|string",
        username: "required|string",
        password: "required|string"
    }
})
