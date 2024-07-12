// تعريف الكلاس HttpException وتعريف الكائن ErrorCode
class HttpException extends Error {
  constructor(message, errorCode, statusCode, errors) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

const ErrorCode = {
  USER_NOT_FOUND: 1001,
  USER_ALREADY_EXIST: 1002,
  INCORRECT_PASSWORD: 1003
};



module.exports = {
  HttpException,
  ErrorCode
};