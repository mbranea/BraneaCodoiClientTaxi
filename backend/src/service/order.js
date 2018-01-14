"use strict";

const order = require('../models').order;

exports.list = function (req, res) {
  order.findAll().then(order => {
    res.jsonp(order);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(order.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  order.findById(id).then(order => {
    if (!order) {
      return res.status(400).send({
        message: 'order Not Found',
      });
    }
    res.jsonp(order);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  order.findById(req.params.id)
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