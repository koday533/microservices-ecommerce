const { Member } = require('../model/')

class memberController {
    async create(req, res) {
        try {
            const { member_id, name, email, phone, gender, address } = req.body;
            await Member.create(
                {
                    member_id: member_id,
                    name: name,
                    email: email,
                    phone: phone,
                    gender: gender,
                    address: address,
                }
            )
            return res.json({ status: true, message: "create Member success" });


        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }

    async profile(req, res) {
        try {
            const { member_id } = req.body;
            const profile = await Member.findOne({ where: { member_id: member_id } })
            return res.json({ status: true, profile });

        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }
    

}

module.exports = memberController;