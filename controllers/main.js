const { throwBadRequestError } = require("../error");
const jwt = require("jsonwebtoken");

const dashboard = (req, res) => {
  const { username } = req.user;
  const randomNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    success: true,
    msg: `Hello ${username}`,
    secret: `Your number is ${randomNumber}`,
  });
};

const login = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(throwBadRequestError("Please provide username and password"));
  }

  const id = Math.floor(Math.random() * 900);
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

module.exports = { dashboard, login };
