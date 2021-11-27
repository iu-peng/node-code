/**
 * 地址
 */

const router = require("koa-router")();
const {
  createAddress,
  getAddressList,
  getAddressDetail,
  updateAddress,
} = require("../controller/address");
const loginCheck = require("../middleware/loginCheck");
const { ErrorModel, SuccessModel } = require("../res-model/index");

router.prefix("/api/user/address");

// 创建收货地址 loginCheck 是登录校验 只有登录了才可以创建
router.post("/", loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo;
  const data = ctx.request.body;

  try {
    const newAddress = await createAddress(userInfo.username, data);
    ctx.body = new SuccessModel(newAddress);
  } catch (error) {
    console.error(error);
    ctx.body = new ErrorModel(10003, "创建地址失败");
  }
});

// 获取收货地址列表
router.get("/", loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo;
  const { username } = userInfo;

  const list = await getAddressList(username);
  ctx.body = new SuccessModel(list);
});

// 获取单个收货地址 动态id
// api/user/address/:id
router.get("/:addressId", loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo;
  const { username } = userInfo;

  const addressId = ctx.params.addressId;

  // 获取地址需要用户名和地址id对应上， 如果登录的是另一个人，传另一人的地址id，也会获取到
  const detail = await getAddressDetail(addressId, username);
  ctx.body = new SuccessModel(detail || []);
});

// 更新单个收货地址
router.patch("/:addressId", loginCheck, async (ctx, next) => {
  const id = ctx.params.addressId;
  const data = ctx.request.body;

  const userInfo = ctx.session.userInfo;
  const { username } = userInfo;

  const newAddress = await updateAddress(id, username, data);
  ctx.body = new SuccessModel(newAddress);
});

module.exports = router;
