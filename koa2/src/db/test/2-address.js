/**
 * 模拟创建
 * 执行 node 该文件, 需先连接mongodb ，执行完后 打开compass查看
 */

const Address = require("../../models/Address");

!(async () => {
  // 1. 创建一个地址
  //   await Address.create({
  //     username: "roc",
  //     city: "北京市",
  //     department: "---小区",
  //     houseNumber: "---号",
  //     name: "鹏",
  //     phone: "13333332222",
  //   });

  //   创建一个地址
  //   await Address.create({
  //     username: "roc",
  //     city: "北京市",
  //     department: "---小区2",
  //     houseNumber: "---2号",
  //     name: "2鹏",
  //     phone: "16533355445",
  //   });

  //   const address = await Address.find({ username: "roc" }); // 正序

  // 2. 按更新时间倒序排列
  //   const address = await Address.find({ username: "roc" }).sort({
  //     updatedAt: -1,
  //   });

  //   3. 根据id获取收货地址详情 document中的id
  const id = "619e3d270176973900ae388b";
  //   const address = await Address.findById("619e3d270176973900ae388b");
  //   console.log("** --- 收货地址 --- **", address); // wsp-log

  // 4. 更新收货地址
  const newAddress = {
    username: "roc",
    // city: "北京市",
    department: "---小区A",
    houseNumber: "---2号A",
    name: "2鹏A",
    phone: "16533352222",
  };
  /**
   * 找到并更新数据
   * 第一个参数是查询条件，可以使多个 更精准
   * 第三个参数 new 是返回更新后的数据
   */
  const result = await Address.findOneAndUpdate({ _id: id }, newAddress, {
    new: true,
  });
  console.log("** --- result --- **", result); // wsp-log
})();
