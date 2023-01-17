const express = require('express');
const router = express.Router();
const UserController = require("../controller/UserController");
const { loginValidator } = require('../validation/loginValidator');
const { registerValidator } = require('../validation/registerValidator');
const userController = new UserController();

router.post("/auth/login", loginValidator, userController.login);
router.post("/auth/register", registerValidator, userController.register);
router.post("/auth/verifyToken", userController.verifyToken);



module.exports = router