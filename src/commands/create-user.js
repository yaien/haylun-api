const indicative = require("indicative")
const mongoose = require("../config/mongoose")
const User = require("../app/models/user.model")

module.exports = {
    command: "create-user",
    builder: {
        name: {
            required: true
        },
        email: {
            required: true
        },
        password: {
            required: true
        }
    },
    handler: async argv => {
        try {
            await indicative.validator.validateAll(argv, {
                name: "required|string|min:4",
                email: "required|email",
                password: "required|min:6"
            })
            await mongoose.connect()
            const user = new User(argv)
            await user.save()
            console.log(user)
        } catch (error) {
            console.error(error)
        } finally {
            await mongoose.disconnect()
        }
    }
}
