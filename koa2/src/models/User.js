/**
 * 定义model
 */

const mongoose = require("../db/db");

const Schema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true, // 必须
      unique: true, // 唯一不可重复
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.Model("user", Schema);

module.exports = User;
