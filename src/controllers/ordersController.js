const OrdersModel = require("../models/ordersModel");
const moment = require('moment'); //biblioteca para converter datas
/**
 * Exemplo de conversão de data
 * console.log(order.orderCreateDate)
 * const data = moment(order.orderCreateDate).format('DD/MM/YYYY');
 * console.log(data);
 */

async function get(req, res) {
  const { id } = req.params;
  
  const obj = id ? { _id: id } : null;

  const orders = await OrdersModel.find(obj);

  res.send(orders);
}

async function post(req, res) {
  const { customerCode, productCode, orderCreateDate, orderStatus } = req.body;

  const order = new OrdersModel({
    customerCode,
    productCode,
    orderCreateDate: new Date(orderCreateDate),
    orderStatus,
  });

  order.save();

  res.send({
    message: "Order registred",
  });

}

async function put(req, res) {
  const { id } = req.params;

  const order = await OrdersModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  res.send({
    message: "Order updated",
    order,
  });

}

async function remove(req, res) {
  const { id } = req.params;

  const remove = await OrdersModel.deleteOne({ _id: id });

  const message = remove ? "Order removed" : "error";

  res.send({
    message,
    id,
  });
}

module.exports = {
  get,
  post,
  put,
  remove,
};
