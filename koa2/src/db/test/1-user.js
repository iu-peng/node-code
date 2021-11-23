/**
 * 模拟创建
 * 执行 node 该文件, 需先连接mongodb ，执行完后 打开compass查看
 */

const User = require("../../models/User");

!(async () => {
  // 创建一个用户
  //   await User.create({
  //     username: "roc",
  //     password: "123456",
  //   });

  //   在创建一个用户
  //   await User.create({
  //     username: "peng",
  //     password: "456",
  //   });

  const roc = await User.findOne({
    username: "roc",
    password: "123456",
  });

  console.log("查询结果", roc);
})();
