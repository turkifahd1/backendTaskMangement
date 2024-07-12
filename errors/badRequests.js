const { HttpException } = require('./root');

class BadRequestErrors extends HttpException {
  constructor(message, errorCode) {
    super(message, errorCode, 404, null);
  }
}

module.exports = BadRequestErrors;
