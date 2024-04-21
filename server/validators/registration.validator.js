const { body, validationResult } = require("express-validator");

const registrationValidator = [
  [
    body("userName")
      .exists()
      .withMessage("User name is missing")
      .notEmpty()
      .withMessage("User name is empty")
      .isString()
      .withMessage("User name must be a string"),
    body("imageURL").isString().withMessage("imageURL name must be a string"),
    body("email")
      .exists()
      .withMessage("Email is missing")
      .notEmpty()
      .withMessage("Email is empty")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .withMessage("Email must be valid email address"),
    body("phoneNumber")
      .exists()
      .withMessage("Phone number is missing")
      .notEmpty()
      .withMessage("Phone number is empty"),
    body("password")
      .exists()
      .withMessage("Password is missing")
      .notEmpty()
      .withMessage("Password is empty")
      .isString()
      .withMessage("Password must be a string")
      .isLength({ min: 5 })
      .withMessage("password minimum length must be 5 characters"),
    body("address")
      .exists()
      .withMessage("Address is missing")
      .notEmpty()
      .withMessage("Address is empty")
      .isString()
      .withMessage("Address must be a string"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: "invalid payload", ...errors });
    } else {
      next();
    }
  },
];

module.exports = registrationValidator;
