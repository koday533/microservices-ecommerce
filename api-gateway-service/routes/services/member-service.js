var express = require('express');
var router = express.Router();
const requestAdapter = require('../request-adapter');

const api = requestAdapter(process.env.ENDPOINT_MEMBER_SERVICE);


router.post('/api/member/profile', async (req, res) => {
    const response = await api.post(req.path, req.body);
    res.send(response.data);
});


module.exports = router;