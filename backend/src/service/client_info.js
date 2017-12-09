"use strict";

const client_info = require('../models').client_info;

exports.list = function (req, res) {
  client_info.findAll().then(client_info => {
    res.jsonp(client_info);
  });
};

exports.create = function (req, res) {
  res.jsonp(client_info.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  client_info.findById(id).then(client_info => {
    res.jsonp(client_info);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  client_info.findById(req.params.id)
    .then(client_info => {
      if (!client_info) {
        return res.status(400).send({
          message: 'client_info Not Found',
        });
      }
      return client_info
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  client_info.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d client_info', numberAffected);
      return res.send(202);
  });
}