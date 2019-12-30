const mongose = require("mongoose")
const argon2 = require("argon2")

const UserSchema = new mongose.Schema({
    email: String,
    password: String,
    name: String
})

UserSchema.pre("save", async function() {
    if (this.isNew) {
        this.password = await argon2.hash(this.password)
    }
})

const UserModel = mongose.model("User", UserSchema)

module.exports = UserModel
