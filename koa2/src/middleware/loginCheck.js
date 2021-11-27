/**
 * 登录验证中间件
 */
const { ErrorModel } = require("../res-model/index");
module.exports = async (ctx, next) => {
  const session = ctx.session;
  if (session && session.userInfo) {
    await next();
    return;
  } else {
    ctx.body = new ErrorModel(10003, "session不存在");
  }
};
