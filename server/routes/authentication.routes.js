const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();
const loginValidator = require("../validators/login.validator");
const registrationValidator = require("../validators/registration.validator");

router.post("/register", registrationValidator, userController.registerUser);
router.post("/login", loginValidator, userController.login);
router.post("/refresh", userController.refresh);
router.post("/logout", userController.logout);

module.exports = router;
