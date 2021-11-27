/**
 * 商店 相关
 */

const router = require("koa-router")();

const {
  getShopList,
  getShopDetail,
  getProducts,
} = require("../controller/shop");
const { ErrorModel, SuccessModel } = require("../res-model/index");

router.prefix("/api/shop");

//  商店列表 此处就不需要登陆了
router.get("/hot-list", async (ctx, next) => {
  const list = await getShopList();
  ctx.body = new SuccessModel(list);
});
// 单个商店信息
router.get("/:shopId", async (ctx, next) => {
  const id = ctx.params.shopId;

  const shop = await getShopDetail(id);
  ctx.body = new SuccessModel(shop);
});

// 商品列表
router.get("/:shopId/product", async (ctx, next) => {
  const id = ctx.params.shopId;
  const tab = ctx.query.tab || "all"; // /api/shop/:shopId/product?tab=fruit 方式获取 没有tab就默认全部all
  const list = await getProducts(id, tab);
  ctx.body = new SuccessModel(list);
});

module.exports = router;
