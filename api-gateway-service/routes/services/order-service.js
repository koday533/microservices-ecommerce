var express = require('express');
var router = express.Router();
const requestAdapter = require('../request-adapter');

const api = requestAdapter(process.env.ENDPOINT_ORDER_SERVICE);


router.post('/api/order/orderHistory', async (req, res) => {
    try {
        var token = req.headers.authorization.split(' ')[1];
        const response = await api.post(req.path, req.body, {
            headers: { Authorization: `Bearer ${token}` }
        });
        res.send(response.data);
    } catch (error) {
        res.send(error);
    }

});


router.post('/api/order/createOrder', async (req, res) => {
    try {
        var token = req.headers.authorization.split(' ')[1];
        const response = await api.post(req.path, req.body, {
            headers: { Authorization: `Bearer ${token}` }
        });
        res.send(response.data);
    } catch (error) {
        res.send(error);
    }

});

router.post('/api/order/cancelOrder', async (req, res) => {
    try {
        var token = req.headers.authorization.split(' ')[1];
        const response = await api.post(req.path, req.body, {
            headers: { Authorization: `Bearer ${token}` }
        });
        res.send(response.data);
    } catch (error) {
        res.send(error);
    }

});

router.post('/api/order/orderDetail', async (req, res) => {
    try {
        var token = req.headers.authorization.split(' ')[1];
        const response = await api.post(req.path, req.body, {
            headers: { Authorization: `Bearer ${token}` }
        });
        res.send(response.data);
    } catch (error) {
        res.send(error);
    }

});



module.exports = router;