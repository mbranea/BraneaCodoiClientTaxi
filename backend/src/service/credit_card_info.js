"use strict";

const credit_card_info = require('../models').credit_card_info;

exports.list = function (req, res) {
  credit_card_info.findAll().then(credit_card_info => {
    res.jsonp(credit_card_info);
  });
};

exports.create = function (req, res) {
  res.jsonp(credit_card_info.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  credit_card_info.findById(id).then(credit_card_info => {
    res.jsonp(credit_card_info);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  credit_card_info.findById(req.params.id)
    .then(credit_card_info => {
      if (!credit_card_info) {
        return res.status(400).send({
          message: 'credit_card_info Not Found',
        });
      }
      return credit_card_info
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  credit_card_info.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d credit_card_info', numberAffected);
      return res.send(202);
  });
}