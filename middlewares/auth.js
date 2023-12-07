const { throwUnAuthorizedError } = require("../error");
const { throwBadRequestError } = require("../error");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(throwBadRequestError("Token not provided"));
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    return next(throwUnAuthorizedError("Not authorized to access this route"));
  }
};

module.exports = authMiddleware;