/**
 * user controller
 *
 */

const User = require("../models/User");

/**
 *注册
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 创建结果
 */
async function register(username, password) {
  const newUser = await User.create({
    username,
    password,
  });
  return newUser;
}

/**
 *登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 查询结果
 */
async function login(username, password) {
  const user = await User.findOne({
    username,
    password,
  });
  return user != null ? true : false;
}

module.exports = {
  register,
  login,
};
