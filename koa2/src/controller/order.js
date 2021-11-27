/**
 * order controller
 */

const Order = require("../models/Order");
const Address = require("../models/Address");
const Product = require("../models/Product");

/**
 * 创建订单
 * @param {string} username 用户名
 * @param {Object} data 订单信息
 */
async function createOrder(username, data) {
  const {
    addressId,
    shopId,
    shopName,
    isCanceled = false,
    products = [],
  } = data;
  //   根据 addressId 拿到地址信息
  const address = await Address.findById(addressId);
  // 获取商品列表
  const pids = products.map((i) => i.id);
  let producList = await Product.find({
    shopId,
    _id: { $in: pids },
  });

  //   拼接商品购买数量
  const productWithSales = producList.map((item) => {
    const current = products.find((i) => i.id === item.id);
    if (!current) throw new Error(`未找到该商品 - ${item.name}`);
    item.orderSales = current.num;
    return {
      product: item,
      orderSales: current.num,
    };
  });

  //  创建订单
  const newOrder = await Order.create({
    username,
    shopName,
    shopId,
    isCanceled,
    address,
    products: productWithSales,
  });
  return newOrder;
}

module.exports = {
  createOrder,
};
