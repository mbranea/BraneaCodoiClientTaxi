"use strict";

const order = require('../models').order;

exports.list = function (req, res) {
  order.findAll().then(order => {
    res.jsonp(order);
  });
};

exports.create = function (req, res) {
  res.jsonp(order.create(req.body));
};

exports.findByorder_id = function (req, res) {
  let order_id = req.params.order_id;
  order.findByorder_id(order_id).then(order => {
    res.jsonp(order);
  });
};

exports.delete = function (req, res) {
  let order_id = req.params.order_id;
  order.findByorder_id(req.params.order_id)
    .then(order => {
      if (!order) {
        return res.status(400).send({
          message: 'order Not Found',
        });
      }
      return order
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var order_id = req.params.order_id;
  var updates = req.body;

  order.update({"_order_id":order_id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d order', numberAffected);
      return res.send(202);
  });
}