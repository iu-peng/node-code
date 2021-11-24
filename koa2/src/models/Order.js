/**
 * 定义model : 订单
 */

const mongoose = require("../db/db");

const Schema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true, // 必须
    },
    shopName: String,
    shopId: String,
    isCanceled: {
      type: Boolean,
      default: false,
    },
    // 订单的地址和商品是非引用关系
    address: {
      username: String,
      city: String,
      department: String,
      houseNumber: String,
      name: String,
      phone: String,
    },
    products: [
      {
        product: {
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
        orderSales: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("order", Schema);

module.exports = Order;
