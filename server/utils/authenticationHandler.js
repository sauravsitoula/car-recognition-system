const { User } = require("../models");
const { getUserById } = require("../repositories/user.repository");
const jwt = require("jsonwebtoken");

exports.validateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader === null || authHeader === undefined) {
    res.status(400).send("Token not present");
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "thesecrettoken", async (err, userData) => {
      if (err) {
        res.status(403).send("Token invalid");
      } else {
        req.user = await getUserById(userData.uuid);
        next();
      }
    });
  }
};
