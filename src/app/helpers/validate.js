const indicative = require("indicative")
const utils = require("indicative-utils")
const lang = require("../../config/lang")

indicative.validator.extend("phone", {
    async: false,
    compile: args => args,
    validate: (data, field, args, config) => {
        const value = utils.getValue(data, field)
        if (utils.skippable(value, field, config)) return true
        const regex = /^\+\d+(-\d+)? \d{10}/
        return regex.test(value)
    }
})

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
