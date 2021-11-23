/**
 * 定义model : 商品
 */

const mongoose = require("../db/db");

const Schema = mongoose.Schema(
  {
    shopId: {
      type: String,
      require: true,
    },
    name: String,
    imgUrl: String,
    sales: Number,
    price: Number,
    oldPrice: Number,
    //   侧边的tabs 规定此商品属于哪个tab
    tabs: [String], // ['all', 'kill']
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", Schema);

module.exports = Product;
