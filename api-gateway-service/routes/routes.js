var express = require('express');
var router = express.Router();
var authRoute = require('./services/auth-service');
var memberRoute = require('./services/member-service');
var orderRoute = require('./services/order-service');

router.use(authRoute);
router.use(memberRoute);
router.use(orderRoute);


module.exports = router;