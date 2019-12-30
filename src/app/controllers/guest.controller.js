const Guest = require("../models/guest.model")

exports.create = async (req, res) => {
    try {
        const guest = new Guest()
        await guest.save()
        res.send(guest)
    } catch (err) {
        next(err)
    }
}

exports.param = async (req, res, next, id) => {
    try {
        req.guest = await Guest.findById(id).orFail()
        next()
    } catch {
        res.status(404).send({ error: "GUEST_NOT_FOUND " })
    }
}

exports.show = async (req, res) => {
    const guest = await req.guest.populate({ path: "items.*.product" })
    res.send(guest)
}
