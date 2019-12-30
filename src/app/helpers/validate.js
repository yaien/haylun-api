const indicative = require("indicative")

/**
 * @typedef Options
 * @property schema {Object}
 * @property from {String}
 */

/**
 * @param options {Options}
 */
module.exports = ({ schema, from = "body" }) => {
    return async (req, res, next) => {
        try {
            let value = await indicative.validator.validateAll(
                req[from],
                schema
            )
            req[from] = value
            next()
        } catch (errors) {
            res.status(400).send(errors)
        }
    }
}
