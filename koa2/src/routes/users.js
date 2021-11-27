const router = require("koa-router")();
const { register, login } = require("../controller/user");
const { ErrorModel, SuccessModel } = require("../res-model/index");

router.prefix("/api/user");

// 注册
router.post("/register", async function (ctx, next) {
  const { username, password } = ctx.request.body;
  try {
    const newUser = await register(username, password);
    ctx.body = new SuccessModel(newUser);
  } catch (error) {
    console.error(error);
    ctx.body = new ErrorModel(10001, "注册失败- " + error.message);
  }
});

// 登录
router.post("/login", async function (ctx, next) {
  const { username, password } = ctx.request.body;
  console.log("** --- result --- **", username); // wsp-log
  const result = await login(username, password);
  if (result) {
    ctx.session.userInfo = { username };
    ctx.body = new SuccessModel();
  } else {
    ctx.body = new ErrorModel(10002, "登录失败- ");
  }
});

module.exports = router;
