const CustomError = require("./CustomError");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

const throwBadRequestError = (message) => {
  return new BadRequest(message);
};

module.exports = throwBadRequestError;
