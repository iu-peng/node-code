/**
 * 订单 相关
 */

const router = require("koa-router")();
const { createOrder, getOrderList } = require("../controller/order");
const loginCheck = require("../middleware/loginCheck");
const { ErrorModel, SuccessModel } = require("../res-model/index");

router.prefix("/api/order");

// 创建订单
router.post("/", loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo;
  const { username } = userInfo;

  //   获取订单数据
  const data = ctx.request.body;

  //   创建订单
  try {
    const result = await createOrder(username, data);
    ctx.body = new SuccessModel(result);
  } catch (error) {
    ctx.body = new ErrorModel(10005, "创建订单失败");
  }
});

// 获取订单列表
router.get("/", loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo;
  const { username } = userInfo;

  const orders = await getOrderList(username);

  ctx.body = new SuccessModel(orders);
});

module.exports = router;
