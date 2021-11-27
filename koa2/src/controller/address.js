/**
 * address controller
 */

const Address = require("../models/Address");

/**
 * 创建地址
 * @param {string} username 用户名
 * @param {Object} data 地址信息
 * @returns 新的地址
 */
async function createAddress(username, data) {
  const address = await Address.create({
    username,
    ...data,
  });
  return address;
}

/**
 * 获取地址列表
 * @param {string} username 用户名
 * @returns 新的地址
 */
async function getAddressList(username) {
  const list = await Address.find({
    username,
  }).sort({ updatedAt: -1 }); // 倒序排序
  return list;
}

/**
 * 获取单个地址
 * @param {string} id 地址id
 * @returns 新的地址
 */
async function getAddressDetail(id, username) {
  const address = await Address.findOne({ _id: id, username });
  return address;
}

/**
 * 更新地址信息
 * @param {string} id 地址id
 * @param {string} username 用户名
 * @param {Object} data 新的收货信息
 * @returns 结果
 */
async function updateAddress(id, username, data) {
  const address = await Address.findOneAndUpdate(
    { _id: id, username },
    { ...data, username },
    {
      new: true,
    }
  );
  return address;
}

module.exports = {
  createAddress,
  getAddressList,
  getAddressDetail,
  updateAddress,
};
