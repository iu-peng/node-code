/**
 * shop controller
 */

const Product = require("../models/Product");
const Shop = require("../models/Shop");

/**
 * 获取商店列表
 */
async function getShopList() {
  const list = await Shop.find().sort({ sales: -1 });
  return list;
}

/**
 * 获取商店详情
 * @param {string} id 商店id
 */
async function getShopDetail(id) {
  const shop = await Shop.findById(id);
  return shop;
}

/**
 * 根据商店获取商品列表
 * @param {string} id shopId
 * @param {string} tab 商品标签
 * @returns 商品列表
 */
async function getProducts(id, tab) {
  const products = Product.find({
    shopId: id,
    tabs: {
      $in: tab,
    },
  });

  return products;
}

module.exports = {
  getShopList,
  getShopDetail,
  getProducts,
};
