/**
 * @description mongoose 连接数据库
 * @auther roc
 */
const mongoose = require("mongoose"); // v5版本

const url = "mongodb://localhost:27017"; // 本地默认数据库
const dbName = "testdb"; // 数据库名称

// 配置
mongoose.set("useCreateIndex", true); // v5版本 6版本会报错
mongoose.set("useFindAndModify", false);

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 连接对象
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("mongoose connect error", err);
});

db.once("open", () => {
  console.log("mongoose 连接成功");
});

module.exports = mongoose;
