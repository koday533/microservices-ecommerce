const axios = require('axios');
const authMiddlewere = async (req, res, next) => {
    try {
        var token = req.headers.authorization.split(' ')[1];
        const auth = await axios.post('http://localhost:7070/api/auth/verifyToken', { token: token });
        if (auth.data.status === false) {
            return res.status(200).send({ status: false, message: auth.data.message })
        }
        next();
    } catch (error) {
        return res.status(200).send({ status: false, message: error.message})
    }

}

module.exports = {
    authMiddlewere
}