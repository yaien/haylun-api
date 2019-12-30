const mongose = require("mongoose")

const UserSchema = new mongose.Schema({
    email: String,
    password: String,
    name: String
})

const UserModel = mongose.model("User", UserSchema)

module.exports = UserModel
