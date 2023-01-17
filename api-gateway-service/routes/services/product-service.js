var express = require('express');
var router = express.Router();
const requestAdapter = require('../request-adapter');

const api = requestAdapter(process.env.ENDPOINT_PRODUCT_SERVICE);


router.post('/api/product/productAll', async (req, res) => {
    const response = await api.post(req.path, req.body);
    res.send(response.data);
});

router.post('/api/product/getProductByProductId', async (req, res) => {
    const response = await api.post(req.path, req.body);
    res.send(response.data);
});


module.exports = router;