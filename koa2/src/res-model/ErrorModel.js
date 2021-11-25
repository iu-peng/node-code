/**
 * 错误 返回的信息
 */

class ErrorModel {
  constructor(error = -1, message = "error") {
    this.errno = error;
    this.message = message;
  }
}

module.exports = ErrorModel;
