const { User } = require('../model/')
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const axios = require('axios');

class userController {
    async login(req, res) {
        try {

            const { email, password } = req.body;
            const data = await User.findOne({
                where: {
                    email
                },
                attributes: ['user_id', 'email', 'password']
            })

            if (!data) {
                return res.json({ status: false, message: "Invalid user" });
            }

            let isAuthorized = await bcrypt.compare(password, data.password);
            if (!isAuthorized) {
                return res.json({ status: false, message: "Invalid password" });
            }

            const token = jwt.sign(
                JSON.parse(JSON.stringify(data)),
                'secret',
                {
                    expiresIn: '360d'
                }
            )
            return res.json({ status: true, token })



        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }

    async register(req, res) {
        try {
            const { email, password, name, phone, gender, address } = req.body;
            const hashPassword = await bcrypt.hash(password, 10);
            const userExists = await User.findOne({ where: { email: email } })

            if (userExists) {
                return res.json({ status: false, message: "User already exists" });
            } else {
                const user = await User.create(
                    {
                        email: email,
                        password: hashPassword
                    }
                )

                const createMember = await axios.post('http://localhost:4040/api/member/create',
                    {
                        member_id: user.user_id,
                        email: email,
                        name: name,
                        phone: phone,
                        gender: gender,
                        address: address
                    });

                if (createMember.data.status) {
                    return res.json({ status: true, user });
                } else {
                    return res.json({ status: false, message: "Failed register" });
                }

            }

        } catch (error) {

            return res.json({ status: false, message: error.message });
        }

    }
    async verifyToken(req, res) {
        try {
            var token = req.body.token || req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(200).send({
                    success: false,
                    message: 'No token provided.'
                });
            }

            jwt.verify(token, 'secret', function (err, decoded) {
                if (err) {
                    return res.status(200).json({ status: false, message: err.message });
                }
                return res.status(200).send({ status: true, message: "authorized" })
            });


        } catch (error) {
            return res.status(200).json({ status: false, message: "Invalid request!" });
        }

    }

}

module.exports = userController;