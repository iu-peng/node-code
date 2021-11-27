const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session"); // session配置
const cors = require("koa2-cors"); // 跨域配置

const index = require("./routes/index");
const users = require("./routes/users");
const address = require("./routes/address");
const shop = require("./routes/shop");
const order = require("./routes/order");

const comments = require("./routes/comments");

// error handler
onerror(app);

//  cors跨域配置
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true, // 允许跨域带cookie
  })
);

app.keys = ["kFif*34^$f8"]; // 秘钥用于加密
// 给前端下发sid
app.use(
  session({
    // 配置cookie
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 模拟登陆
// app.use(async (ctx, next) => {
//   if (ctx.query.user === "roc") {
//     console.log("成功登陆");
//     await next();
//   } else {
//     ctx.body = "登录失败";
//   }
// });

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(address.routes(), address.allowedMethods());
app.use(shop.routes(), shop.allowedMethods());
app.use(order.routes(), order.allowedMethods());
app.use(comments.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
