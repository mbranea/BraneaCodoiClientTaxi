"use strict";

const orase = require('../models').orase;

exports.list = function (req, res) {
  orase.findAll().then(orase => {
    res.jsonp(orase);
  });
};

exports.create = function (req, res) {
  res.jsonp(orase.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  orase.findById(id).then(orase => {
    res.jsonp(orase);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  orase.findById(req.params.id)
    .then(orase => {
      if (!orase) {
        return res.status(400).send({
          message: 'orase Not Found',
        });
      }
      return orase
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  orase.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d orase', numberAffected);
      return res.send(202);
  });
}