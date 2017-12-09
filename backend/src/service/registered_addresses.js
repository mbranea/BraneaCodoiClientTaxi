"use strict";

const registered_addresses = require('../models').registered_addresses;

exports.list = function (req, res) {
  registered_addresses.findAll().then(registered_addresses => {
    res.jsonp(registered_addresses);
  });
};

exports.create = function (req, res) {
  res.jsonp(registered_addresses.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  registered_addresses.findById(id).then(registered_addresses => {
    res.jsonp(registered_addresses);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  registered_addresses.findById(req.params.id)
    .then(registered_addresses => {
      if (!registered_addresses) {
        return res.status(400).send({
          message: 'registered_addresses Not Found',
        });
      }
      return registered_addresses
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  registered_addresses.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d registered_addresses', numberAffected);
      return res.send(202);
  });
}