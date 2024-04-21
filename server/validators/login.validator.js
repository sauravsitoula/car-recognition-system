const { body, validationResult } = require("express-validator");
const loginValidator = [
  [
    body("email")
      .exists()
      .withMessage("Email is missing")
      .notEmpty()
      .withMessage("Email is empty")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .withMessage("Email must be valid email address"),
    body("password")
      .exists()
      .withMessage("password is missing")
      .notEmpty()
      .withMessage("password is empty")
      .isString()
      .withMessage("invalid password")
      .isLength({ min: 5 })
      .withMessage("password minimum length must be 5 characters"),
  ],
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: "invalid payload", ...errors });
    } else {
      next();
    }
  },
];

module.exports = loginValidator;
