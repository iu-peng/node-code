const Order = require("../../models/Order");
const Address = require("../../models/Address");
const Product = require("../../models/Product");

!(async () => {
  // 创建一个订单 家乐福的
  const requestBody = {
    addressId: "619e3d270176973900ae388b",
    shopId: "619e439bdda4c43b1d80a150",
    shopName: "家乐福",
    isCanceled: false,
    products: [
      {
        id: "619e47b604696f3c0a1803b9",
        num: 5, // 购买数量
      },
      {
        id: "619e47b604696f3c0a1803bc",
        num: 3,
      },
    ],
  };

  //   创建订单步骤
  // 1. 通过 addressId 获取地址信息
  const address = await Address.findById(requestBody.addressId);

  // 2. 获取商品列表 通过商品id获取商品
  const pids = requestBody.products.map((i) => i.id);
  const products = await Product.find({
    shopId: requestBody.shopId,
    _id: {
      $in: pids,
    },
  });
  //   拼接数据 商品信息 + 购买数量
  const productWithSales = products.map((pro) => {
    const id = pro._id.toString();
    const current = requestBody.products.find((i) => i.id === id);
    if (!current) throw Error("未找到商品");
    return {
      product: pro,
      orderSales: current.num,
    };
  });

  await Order.create({
    username: "roc",
    shopName: requestBody.shopName,
    shopId: requestBody.shopId,
    isCanceled: requestBody.isCanceled,
    address,
    products: productWithSales,
  });

  //   console.log("查询结果", productWithSales);
})();
