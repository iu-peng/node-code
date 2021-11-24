/**
 * 模拟创建
 * 执行 node 该文件, 需先连接mongodb ，执行完后 打开compass查看
 */

const Shop = require("../../models/Shop");

!(async () => {
  //   1. 创建一个shop
  //   await Shop.create({
  //     name: "家乐福",
  //     imgUrl: "/images/family/1.jpg",
  //     sales: 12, // 销量
  //     expressLimit: 10,
  //     expressPrice: 5,
  //     slogan: "每一件都有优惠！",
  //   });
  //   await Shop.create({
  //     name: "永辉超市",
  //     imgUrl: "/images/family/2.jpg",
  //     sales: 33,
  //     expressLimit: 5,
  //     expressPrice: 9,
  //     slogan: "折上折！",
  //   });

  // 2. 获取附近商店 根据销量倒序排列
  //   const shops = await Shop.find().sort({ sales: -1 });
  //   console.log("** --- shops --- **", shops); // wsp-log

  // 3. 获取商店详情
  // const id = "619e439bdda4c43b1d80a150";
  // const shop = await Shop.findOne({ _id: id });
  // console.log("** --- shop --- **", shop); // wsp-log

  // 4. 更新
  const jiaId = "619e439bdda4c43b1d80a150";
  const yongId = "619e439bdda4c43b1d80a153";
  const newJiaShop = {
    imgUrl: "/images/shop/jialefu.png",
  };
  const newYoneShop = {
    imgUrl: "/images/shop/yonghui.png",
  };
  const result = await Shop.findOneAndUpdate({ _id: yongId }, newYoneShop, {
    new: true,
  });
  console.log("** --- result --- **", result); // wsp-log
})();
