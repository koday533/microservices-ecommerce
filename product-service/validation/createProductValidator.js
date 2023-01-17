let Joi = require('Joi')
const createProductValidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        detail: Joi.string().required(),
        stock: Joi.number().required(),
        photoUrl: Joi.string().required()
    }).unknown().required();
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({ status: false, message: error.details[0].message });
    }
    next();

}


module.exports = {
    createProductValidator
}