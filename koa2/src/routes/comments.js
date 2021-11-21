const router = require("koa-router")();

router.prefix("/api");

router.get("/list", async (ctx) => {
  const query = ctx.query; // get 的？后的参数
  console.log("参数", Object.keys(ctx));
  // ctx.body = "api list"; // 返回的是文本格式
  // 返回的是json格式
  ctx.body = {
    errno: 0,
    data: [
      { content: "内容1234r", user: "roc" },
      { content: "内容1234r", user: "roc" },
      { content: "内容1234r", user: "roc" },
    ],
  };
});
router.post("/create", async (ctx) => {
  const body = ctx.request.body; // post 的内容部分
  console.log("post body", body);
  // ctx.body = "api list"; // 返回的是文本格式
  ctx.body = {
    errno: 0,
    message: "成功了",
  };
});

module.exports = router;
