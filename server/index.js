const express = require("express");
const db = require("./models");
const app = express();
const authRoutes = require("./routes/authentication.routes.js");
const cors = require("cors");
const corsOptions = require("./utils/corsOption");
const { validateToken } = require("./utils/authenticationHandler.js");
require("express-async-errors");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
// app.use(validateToken);
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ error: true, message: message });
});

app.listen(3001, () => {
  console.log("server is running at http://localhost:3001");
  db.sequelize.sync().then((req) => {
    console.log("DB synchronized");
  });
});
