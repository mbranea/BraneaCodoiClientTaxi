"use strict";

const adress_info = require('../models').adress_info;

exports.list = function (req, res) {
  adress_info.findAll().then(adress_info => {
    res.jsonp(adress_info);
  });
};

exports.create = function (req, res) {
  res.jsonp(adress_info.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  adress_info.findById(id).then(adress_info => {
    res.jsonp(adress_info);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  adress_info.findById(req.params.id)
    .then(adress_info => {
      if (!adress_info) {
        return res.status(400).send({
          message: 'adress_info Not Found',
        });
      }
      return adress_info
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  adress_info.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d adress_info', numberAffected);
      return res.send(202);
  });
}