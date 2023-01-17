const express = require('express');
const router = express.Router();
const MemberController = require("../controller/memberController");
const memberController = new MemberController();

router.post("/member/create", memberController.create);
router.post("/member/profile", memberController.profile);

module.exports = router