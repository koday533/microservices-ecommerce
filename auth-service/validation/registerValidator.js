let Joi = require('Joi')
const registerValidator = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        name: Joi.string().required()
    }).unknown().required();
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(200).json({ status: false, message: error.details[0].message });
    }
    next();

}

module.exports = {
    registerValidator
}