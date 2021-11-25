const router = require("koa-router")();
const { register } = require("../controller/user");
const { ErrorModel, SuccessModel } = require("../res-model/index");

router.prefix("/api/user");

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.post("/register", async function (ctx, next) {
  const { username, password } = ctx.request.body;
  try {
    const newUser = await register(username, password);
    ctx.body = new SuccessModel(newUser);
    // ctx.body = {
    //   error: 0, // 成功
    //   data: newUser,
    // };
  } catch (error) {
    console.error(error);
    ctx.body = new ErrorModel(10001, "创建失败- " + error.message);
    // ctx.body = {
    //   error: 10001,
    //   message: "创建失败- " + error.message,
    // };
  }
});

module.exports = router;
