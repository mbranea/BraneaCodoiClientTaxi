"use strict";

const registered_adresses = require('../models').registered_adresses;

exports.list = function (req, res) {
  registered_adresses.findAll().then(registered_adresses => {
    res.jsonp(registered_adresses);
  });
};

exports.create = function (req, res) {
  res.jsonp(registered_adresses.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  registered_adresses.findById(id).then(registered_adresses => {
    res.jsonp(registered_adresses);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  registered_adresses.findById(req.params.id)
    .then(registered_adresses => {
      if (!registered_adresses) {
        return res.status(400).send({
          message: 'registered_adresses Not Found',
        });
      }
      return registered_adresses
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  registered_adresses.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d registered_adresses', numberAffected);
      return res.send(202);
  });
}