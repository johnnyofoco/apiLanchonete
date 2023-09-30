const CustomerModel = require("../models/customersModel");

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;

  const customers = await CustomerModel.find(obj);

  res.send(customers);
}

async function post(req, res) {
  const { code, name, email, phone, adress } = req.body;

  const customer = new CustomerModel({
    code,
    name,
    email,
    phone,
    adress,
  });

  customer.save();

  res.send({
    message: "Customer registred",
  });
}

async function put(req, res) {
  const { id } = req.params;

  const customer = await CustomerModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  res.send({
    message: "Customer updated",
    customer,
  });

}

async function remove(req, res) {
  const { id } = req.params;

  const remove = await CustomerModel.deleteOne({ _id: id });

  const message = remove ? "Customer removed" : "error";

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
