const indicative = require("indicative")
const lang = require("../../config/lang")

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
            let value = await indicative.validator.validateAll(req[from], schema, lang.validation, {
                cacheKey: req.url,
                removeAdditional: true
            })
            req[from] = value
            next()
        } catch (errors) {
            res.status(400).send(errors)
        }
    }
}
