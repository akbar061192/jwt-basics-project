const CustomError = require("./CustomError");
const { StatusCodes } = require("http-status-codes");

class UnAuthorized extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

const throwUnAuthorizedError = (message) => {
  return new UnAuthorized(message);
};

module.exports = throwUnAuthorizedError;
