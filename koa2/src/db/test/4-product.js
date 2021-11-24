/**
 * 模拟创建
 * 执行 node 该文件, 需先连接mongodb ，执行完后 打开compass查看
 */

const Product = require("../../models/Product");

!(async () => {
  //   1. 创建4个 product
  //   await Product.create({
  //     shopId: "619e439bdda4c43b1d80a150", // 家乐福
  //     name: "苹果",
  //     imgUrl: "/images/product/apple.png",
  //     sales: 100, //销量
  //     price: 5, //当前价格
  //     oldPrice: 7, // 老价格
  //     //   侧边的tabs 规定此商品属于哪个tab
  //     tabs: ["all", "seckill", "fruit"],
  //   });
  //   await Product.create({
  //     shopId: "619e439bdda4c43b1d80a150", // 家乐福
  //     name: "香蕉",
  //     imgUrl: "/images/product/banana.png",
  //     sales: 155,
  //     price: 6,
  //     oldPrice: 8,
  //     //   侧边的tabs 规定此商品属于哪个tab
  //     tabs: ["all", "fruit"],
  //   });
  //   await Product.create({
  //     shopId: "619e439bdda4c43b1d80a153", // 永辉超市
  //     name: "西瓜",
  //     imgUrl: "/images/product/xigua.jpg",
  //     sales: 444,
  //     price: 12,
  //     oldPrice: 15,
  //     //   侧边的tabs 规定此商品属于哪个tab
  //     tabs: ["all", "seckill", "fruit"],
  //   });
  //   await Product.create({
  //     shopId: "619e439bdda4c43b1d80a153", // 永辉超市
  //     name: "香蕉",
  //     imgUrl: "/images/product/banana.png",
  //     sales: 89,
  //     price: 3,
  //     oldPrice: 10,
  //     //   侧边的tabs 规定此商品属于哪个tab
  //     tabs: ["all", "seckill", "fruit"],
  //   });

  //   2. 查询某个商店 某个tab的商品
  const products = await Product.find({
    shopId: "619e439bdda4c43b1d80a150",
    tabs: {
      $in: "seckill", // 包含seckill的
    },
  });
  console.log("** --- 查询结果 --- **", products); // wsp-log
})();
